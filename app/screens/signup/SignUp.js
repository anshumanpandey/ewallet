import React,{useState} from 'react'
import {StyleSheet,View,Text,TouchableOpacity,ImageBackground,TextInput,ScrollView,Image,Modal,SafeAreaView,CheckBox} from 'react-native'
import {Icon} from 'native-base'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'


const SignUp = (props)=>{
  
  
    return(
   
      <ScrollView style={styles.container}>
        <View style={styles.loginContainer}>
       
            <View style={styles.loginInfoArea}>
                <View style={styles.signupTitleView}>
                    <Text style={styles.signupTitle}>Sign-up</Text>
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
                  onPress={()=>NavigationService.navigate(Screens.Achievement)}
                  >
                   <Text style={styles.buttonText}>
                       Confirm
                   </Text>              
             
                </TouchableOpacity>
                </View>
               <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10}}>
                 <Text style={styles.memberText}>You have an account ?</Text>
                 <TouchableOpacity 
                 onPress={()=>NavigationService.navigate(Screens.Login)}
                 >
                   <Text style={[styles.memberText,{fontSize:16}]}>Log-in</Text>
                 </TouchableOpacity>
               </View>
               </View> 
         
       
        </View>
       </ScrollView>
  
       
    )
}



export default SignUp;