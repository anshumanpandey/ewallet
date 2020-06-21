import React,{useState} from 'react'
import {StyleSheet,View,Text,TouchableOpacity,ImageBackground,TextInput,ScrollView,Image,Modal,SafeAreaView,CheckBox, StatusBar} from 'react-native'
import {Icon} from 'native-base'
import Images from '../../constants/image'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'

 const Experience =()=> {
  return (
    <ScrollView style={styles.container}>
        <StatusBar hidden={true}/>
       <View style={styles.achieveView}>
           <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
               <TouchableOpacity
                style={styles.backView}
                onPress={()=>NavigationService.navigate(Screens.Attach)}
                >
                    <Icon type="Ionicons" name="ios-arrow-round-back"/>
                    <Text style={styles.backTitle}>Back</Text>
               </TouchableOpacity>
            
           </View>
           <Text style={styles.desTitle}>Have you been working with someone on this? Would you like a feedback from your manager, a client, a colleague?</Text>
            <View style={{marginTop:40}}>
            <View style={styles.textInputBackground}>
                  <TextInput
                  style={styles.textInput}
                  placeholder="Full Name"
                  autoCompleteType={'name'}
                  />        
            </View>
            <View style={styles.textInputBackground}>
                  <TextInput
                  style={styles.textInput}
                  placeholder="Email or Phone number"
                  autoCompleteType={'name'}
                  />        
            </View>
            <View style={styles.textInputBackground}>
                  <TextInput
                  style={styles.textInput}
                  placeholder="Select who was this person to you?"
                  autoCompleteType={'name'}
                  />        
            </View>

            </View>
            <View style={{marginTop:40}}>
               
                <View style={styles.tipView}>
                 <Image source={Images.Lamp} style={{position:'absolute',top:-30,left:0}}/>
                    <Text style={{color:"#99879D",fontSize:16}}>Tips</Text>
                </View>
                <Text style={styles.context}>It’s a good opportunity for you to take feedback and add credibility to your achievements. You can’t add achievements with no one to testify for it.</Text>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity
                 style={[styles.textInputBackground,{backgroundColor:'#8BA5FA'}]}
                 onPress={()=>NavigationService.navigate(Screens.Congrats)}
                  >
                   <Text style={styles.buttonText}>
                       Next
                   </Text>              
             
                </TouchableOpacity>
            </View>
       </View>
    </ScrollView>
  );
}

export default Experience;