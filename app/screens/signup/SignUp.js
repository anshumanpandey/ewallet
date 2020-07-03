import React, { useState, useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/action.js'

import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, Image, Modal, SafeAreaView, CheckBox, Alert } from 'react-native'
import { Formik } from 'formik';
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'
import ErrorLabel from '../../components/ErrorLabel.js';
import useAxios from 'axios-hooks'
import Toast from 'react-native-simple-toast';
import GlobalStyles from '../../constants/globalStyles.js';
import { dispatchGlobalState, GLOBAL_STATE_ACTIONS } from '../../state/GlobalState.js';

const SignUp = (props) => {
  const [registerReq, doRegister] = useAxios({
    url: '/register',
    method: 'POST'
  }, { manual: true })

  return (
    <ScrollView style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.loginInfoArea}>
          <View style={styles.signupTitleView}>
            <Text style={styles.signupTitle}>Sign Up</Text>
          </View>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phoneNumber: '',
              password: '',
              positionAt: '',
            }}
            validate={(values) => {
              const errors = {}
              if (!values.firstName) errors.firstName = "Required"
              if (!values.lastName) errors.lastName = "Required"
              if (!values.email) errors.email = "Required"
              if (!values.password) errors.password = "Required"
              if (!values.phoneNumber) errors.phoneNumber = "Required" 

              const splittedValues = values.positionAt.split(',')
              if (!values.positionAt) {
                errors.positionAt = "Required"
              } else if (!values.positionAt.includes(',')) {
                errors.positionAt = "Invalid value. Specify like: Position, Company Name"
              } else if (splittedValues.length != 2) {
                errors.positionAt = "Invalid value. Specify like: Position, Company Name"
              } else if (splittedValues[0].trim() == '' || splittedValues[1].trim() == "") {
                errors.positionAt = "Invalid value. Specify like: Position, Company Name"
              }

              return errors
            }}
            onSubmit={values => {
              const splittedValues = values.positionAt.split(',')

              doRegister({
                data: { ...values, companyTitle: splittedValues[0], companyName: splittedValues[1] }
              })
                .then((r) => {
                  console.log(r.data)
                  dispatchGlobalState({ type: GLOBAL_STATE_ACTIONS.SUCCESS, state: 'User created'})
                  NavigationService.navigate(Screens.Login)
                })
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <View style={styles.textInputBackground}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="First Name"
                    autoCompleteType={'name'}
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    value={values.firstName}
                  />
                </View>
                {errors.firstName && touched.firstName && <ErrorLabel text={errors.firstName} />}

                <View style={styles.textInputBackground}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Last Name"
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    value={values.lastName}
                  />
                </View>
                {errors.lastName && touched.lastName && <ErrorLabel text={errors.lastName} />}

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

                <View style={styles.textInputBackground}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Phone Number"
                    keyboardType="numeric"
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    value={values.phoneNumber}
                  />
                </View>
                {errors.phoneNumber && touched.phoneNumber && <ErrorLabel text={errors.phoneNumber} />}

                <View style={styles.textInputBackground}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Designation, Company Name"
                    onChangeText={handleChange('positionAt')}
                    onBlur={handleBlur('positionAt')}
                    value={values.positionAt}
                  />
                </View>
                {errors.positionAt && touched.positionAt && <ErrorLabel text={errors.positionAt} />}

                <View style={styles.buttonView}>
                  <TouchableOpacity
                    disabled={registerReq.loading}
                    style={[styles.textInputBackground, { backgroundColor: '#8BA5FA' }, registerReq.loading && GlobalStyles.disabledButton]}
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
            <Text style={styles.memberText}>Already have an account with us?</Text>
            <TouchableOpacity
              onPress={() => NavigationService.navigate(Screens.Login)}
            >
              <Text style={styles.memberText}>Sign In</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);