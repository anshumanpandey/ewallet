import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, Image, Modal, SafeAreaView, CheckBox } from 'react-native'
import useAxios from 'axios-hooks'
import { Formik } from 'formik';
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'
import ErrorLabel from '../../components/ErrorLabel';
import GlobalStyles from '../../constants/globalStyles';
import { dispatchGlobalState, GLOBAL_STATE_ACTIONS } from '../../state/GlobalState';


const Login = (props) => {

  const [loginReq, doLogin] = useAxios({
    url: '/login',
    method: 'POST'
  }, { manual: true })

  return (

    <ScrollView style={styles.container}>
      <View style={styles.loginContainer}>

        <View style={styles.loginInfoArea}>
          <View style={styles.signupTitleView}>
            <Text style={styles.signupTitle}>Sign In</Text>
          </View>

          <Formik
            initialValues={{ email: '', password: '' }}
            validate={(values) => {
              const errors = {}
              if (!values.email) errors.email = "Required"
              if (!values.password) errors.password = "Required"

              return errors
            }}
            onSubmit={values => {
              doLogin({
                data: values
              })
                .then((r) => {
                  console.log(r.data)
                  dispatchGlobalState({ type: GLOBAL_STATE_ACTIONS.TOKEN, state: r.data.token})
                  dispatchGlobalState({ type: GLOBAL_STATE_ACTIONS.PROFILE, state: r.data})
                  NavigationService.navigate(Screens.Home)
                })
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <View style={styles.textInputBackground}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Email Address"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                {errors.email && touched.email && <ErrorLabel text={errors.email} />}

                <View style={styles.textInputBackground}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                </View>
                {errors.password && touched.password && <ErrorLabel text={errors.password} />}

                <View style={styles.buttonView}>
                  <TouchableOpacity
                    disabled={loginReq.loading}
                    style={[styles.textInputBackground, { backgroundColor: '#8BA5FA' }, loginReq.loading && GlobalStyles.disabledButton]}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.buttonText}>
                      Confirm
                   </Text>

                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Text style={styles.memberText}>You have not an account ?</Text>
            <TouchableOpacity
              onPress={() => NavigationService.navigate(Screens.Register)}
            >
              <Text style={styles.memberText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>


      </View>
    </ScrollView>


  )
}

export default Login;