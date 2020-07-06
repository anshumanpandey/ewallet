import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, Image, Modal, SafeAreaView, CheckBox } from 'react-native'
import { Icon } from 'native-base'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'
import { useGlobalState, dispatchGlobalState, GLOBAL_STATE_ACTIONS } from '../../state/GlobalState'
import { Formik } from 'formik';
import ErrorLabel from '../../components/ErrorLabel'
import useAxios from 'axios-hooks'
import GlobalStyles from '../../constants/globalStyles'


const EditProfile = (props) => {

  const [profile] = useGlobalState('profile');

  const [registerReq, doUpdate] = useAxios({
    url: '/editProfile',
    method: 'PUT'
  }, { manual: true })

  return (

    <ScrollView style={styles.container}>
      <View style={styles.loginContainer}>

        <View style={styles.loginInfoArea}>
          <View style={styles.backView}>
            <TouchableOpacity
              style={styles.backView}
              onPress={() => NavigationService.goBack()}
            >
              <Icon type="Ionicons" name="ios-arrow-round-back" />
              <Text style={styles.backTitle}>Back</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.signupTitleView}>
            <Text style={styles.signupTitle}>Edit Profile</Text>
          </View>
          <Formik
            initialValues={{
              ...profile,
              positionAt: `${profile.companyTitle}, ${profile.companyName}`
            }}
            validate={(values) => {
              const errors = {}
              if (!values.firstName) errors.firstName = "Required"
              if (!values.lastName) errors.lastName = "Required"
              if (!values.email) errors.email = "Required"
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
              doUpdate({
                data: values
              })
                .then((r) => {
                  dispatchGlobalState({ type: GLOBAL_STATE_ACTIONS.TOKEN, state: r.data.token })
                  dispatchGlobalState({ type: GLOBAL_STATE_ACTIONS.PROFILE, state: r.data })
                  dispatchGlobalState({ type: GLOBAL_STATE_ACTIONS.SUCCESS, state: 'Profile updated'})
                  props.onTabClick(5)
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
                    autoCompleteType={'name'}
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

        </View>


      </View>
    </ScrollView>


  )
}



export default EditProfile;