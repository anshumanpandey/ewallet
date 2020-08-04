import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/action.js'

import { View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, Image, Modal, SafeAreaView, CheckBox, Alert } from 'react-native'
import { Formik } from 'formik';
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'
import ErrorLabel from '../../components/ErrorLabel.js';
import useAxios from 'axios-hooks'
import GlobalStyles from '../../constants/globalStyles.js';
import { dispatchGlobalState, GLOBAL_STATE_ACTIONS } from '../../state/GlobalState.js';

const ForgotPasswordScreen = (props) => {
  const [registerReq, doRegister] = useAxios({
    url: '/register',
    method: 'POST'
  }, { manual: true })

  const [loginReq, doLogin] = useAxios({
    url: '/login',
    method: 'POST'
  }, { manual: true })

  return (
    <ScrollView style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.loginInfoArea}>
          <Formik
            initialValues={{ email: '' }}
            validate={(values) => {
              const errors = {}
              if (!values.email) errors.email = "Required"

              return errors
            }}
            onSubmit={values => {
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <View style={{ borderWidth: 0, padding: '0%', borderColor: 'rgba(0,0,0,0.2)', borderRadius: 8 }}>
                  <View style={[styles.signupTitleView, { paddingBottom: '5%'}]}>
                    <Text style={styles.signupTitle}>Forgot password</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                      <Text style={[styles.memberText, { textAlign: 'center'}]}>
                        Insert your email and receive a link to create a new password
                      </Text>
                    </View>
                  </View>
                  <View style={styles.textInputBackground}>
                    <TextInput
                      placeholderTextColor="gray"
                      style={styles.textInput}
                      placeholder="Email"
                      autoCompleteType={"email"}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                  </View>
                  {errors.email && touched.email && <ErrorLabel text={errors.email} />}

                </View>

                <View style={[styles.buttonView, {marginTop: '15%'}]}>
                  <TouchableOpacity
                    disabled={registerReq.loading}
                    style={[styles.textInputBackground, { backgroundColor: '#8BA5FA' }, registerReq.loading && GlobalStyles.disabledButton]}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.buttonText}>Confirm</Text>

                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => NavigationService.goBack()}
            >
              <Text style={styles.memberText}>Go back</Text>
            </TouchableOpacity>
          </View>
        </View>


      </View>
    </ScrollView>


  )
}


const mapStateToProps = ({ auth }) => {
  return {
    UserInfo: auth
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen);