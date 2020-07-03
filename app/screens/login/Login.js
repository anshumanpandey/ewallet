import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, Image, Modal, SafeAreaView, CheckBox } from 'react-native'
import useAxios from 'axios-hooks'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'
import "../../helpers/AxiosBootstrap"


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

          <View style={styles.textInputBackground}>
            <TextInput
              style={styles.textInput}
              placeholder="Email Address"

            />

          </View>
          <View style={styles.textInputBackground}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
            />

          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity
              style={[styles.textInputBackground, { backgroundColor: '#8BA5FA' }]}
              onPress={() => {
                doLogin({
                  data: {}
                })
                .then(() => {
                  NavigationService.navigate(Screens.Home)
                })
              }}
            >
              <Text style={styles.buttonText}>
                Confirm
                   </Text>

            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Text style={styles.memberText}>You have not an account ?</Text>
            <TouchableOpacity
              onPress={() => NavigationService.navigate(Screens.SignUp)}
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