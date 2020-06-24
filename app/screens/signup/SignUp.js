import React,{useState,useEffect} from 'react'
import {AsyncStorage} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {ActionCreators} from '../../redux/action.js'

import {StyleSheet,View,Text,TouchableOpacity,ImageBackground,TextInput,ScrollView,Image,Modal,SafeAreaView,CheckBox, Alert} from 'react-native'
import {Icon} from 'native-base'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'


const SignUp = (props)=>{
   const [firstName,setFirstName]=useState('');
   const [lastName,setLastName]=useState('');
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const [phone,setPhone] = useState('');
   const [career,setCareer] = useState('');

   
   useEffect(() => {

      getAthentication();
    
   }, [])
   
   const getAthentication =async()=>{
      
    let item = await AsyncStorage.getItem("athentication");
    if(item !==null){
       let auth = JSON.parse(item)
       setFirstName(auth.fname);
       setLastName(auth.lname);
       setEmail(auth.email);
       setPassword(auth.password);
       setPhone(auth.number);
       setCareer(auth.career);
    }
   }

   //signup function
   const SubmitSignup = () =>{
     
      if(validation(firstName,lastName,email,password,phone,career)){
          
          props.signUpUser(firstName,lastName,email,password,phone,career);
           NavigationService.navigate(Screens.Achievement)
      }
      else{
          console.log("sdfsdf")
          alert("Please check the fields to be filled out again.")
      }   
   }

   //signup validation 
   const validation = (firstName,lastName,email,password,phone,career)=>{
        
      if(firstName !=="" && lastName !=="" && email !=="" && password !=="" && phone !=="" && career !==""){
         return true;
      }
      else{
         
         return false;
      }
      
   }

   console.log(firstName)
    return(
      <ScrollView style={styles.container}>
        <View style={styles.loginContainer}>
            <View style={styles.loginInfoArea}>
                <View style={styles.signupTitleView}>
                    <Text style={styles.signupTitle}>Sign Up</Text>
                </View>
                <View style={styles.textInputBackground}>
                  <TextInput
                  style={styles.textInput}
                  placeholder="First Name"
                  autoCompleteType={'name'}
                  value={firstName}
                  onChangeText={text=>setFirstName(text)}
                  />
                           
                </View>
                <View style={styles.textInputBackground}>
                  <TextInput
                  style={styles.textInput}
                  placeholder="Last Name"
                  value={lastName}
                  autoCompleteType={'name'}
                  onChangeText={text=>setLastName(text)}
                  />
                           
                </View>
                <View style={styles.textInputBackground}>
                  <TextInput
                  style={styles.textInput}
                  value={email}
                  placeholder="Email Address"
                  onChangeText={text=>setEmail(text)}
                  />
                  
                </View>
                <View style={styles.textInputBackground}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  value={password}
                  secureTextEntry={true}
                  onChangeText={text=>setPassword(text)}
                  />
              
                </View>
                <View style={styles.textInputBackground}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Phone Number"
                  keyboardType="numeric"
                  value={phone}
                  onChangeText={text=>setPhone(text)}

                  />
              
                </View>
                <View style={styles.textInputBackground}>
                <TextInput
                  style={styles.textInput}
                  value={career}
                  placeholder="Current job title and company"
                  onChangeText={text=>setCareer(text)}

                  />
              
                </View>
               <View style={styles.buttonView}>
                <TouchableOpacity
                 style={[styles.textInputBackground,{backgroundColor:'#8BA5FA'}]}
                  onPress={()=>SubmitSignup()}
                  >
                   <Text style={styles.buttonText}>
                       Confirm
                   </Text>              
             
                </TouchableOpacity>
                </View>
               <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10}}>
                 <Text style={styles.memberText}>Already have an account with us?</Text>
                 <TouchableOpacity 
                 onPress={()=>NavigationService.navigate(Screens.Login)}
                 >
                   <Text style={styles.memberText}>Sign In</Text>
                 </TouchableOpacity>
               </View>
               </View> 
         
       
        </View>
       </ScrollView>
  
       
    )
}


const mapStateToProps = ({auth}) =>{
  return{
    UserInfo:auth
  }
}
const mapDispatchToProps =dispatch =>{
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);