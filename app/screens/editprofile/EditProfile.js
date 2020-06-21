import React,{useState} from 'react'
import {StyleSheet,View,Text,TouchableOpacity,ImageBackground,TextInput,ScrollView,Image,Modal,SafeAreaView,CheckBox} from 'react-native'
import {Icon} from 'native-base'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'


const EditProfile = (props)=>{
  
  
    return(
   
      <ScrollView style={styles.container}>
        <View style={styles.loginContainer}>
       
            <View style={styles.loginInfoArea}>
                <View style={styles.signupTitleView}>
                    <Text style={styles.signupTitle}>EditProfile</Text>
                </View>
                <View style={styles.textInputBackground}>
                  <TextInput
                  style={styles.textInput}
                  placeholder="First Name"
                  autoCompleteType={'name'}
                  />
                           
                </View>
                <View style={styles.textInputBackground}>
                  <TextInput
                  style={styles.textInput}
                  placeholder="Last Name"
                  autoCompleteType={'name'}
                  />
                           
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
                <View style={styles.textInputBackground}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Phone Number"
                  />
              
                </View>
                <View style={styles.textInputBackground}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Current job title and company"
                  />
              
                </View>
               <View style={styles.buttonView}>
                <TouchableOpacity
                 style={[styles.textInputBackground,{backgroundColor:'#8BA5FA'}]}
                  onPress={()=>NavigationService.goBack()}
                  >
                   <Text style={styles.buttonText}>
                       Confirm
                   </Text>              
             
                </TouchableOpacity>
                </View>
             
               </View> 
         
       
        </View>
       </ScrollView>
  
       
    )
}



export default EditProfile;