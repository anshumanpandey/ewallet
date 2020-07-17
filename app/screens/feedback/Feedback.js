import React,{useState} from 'react'
import {StyleSheet,View,Text,TouchableOpacity,ImageBackground,TextInput,ScrollView,Image,Modal,SafeAreaView,CheckBox, StatusBar} from 'react-native'
import {Icon} from 'native-base'
import Images from '../../constants/image'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'

 const Feedback =()=> {
  return (
    <ScrollView style={styles.container}>
        <StatusBar hidden={true}/>
       <View style={styles.achieveView}>
           <View style={styles.backView}>
               <TouchableOpacity
                style={styles.backView}
                onPress={()=>NavigationService.goBack()}
                >
                    <Icon type="Ionicons" name="ios-arrow-round-back"/>
                    <Text style={styles.backTitle}>Back</Text>
               </TouchableOpacity>
             
           </View>
           <Text style={styles.desTitle}>Tell us what you think:</Text>
           <View style={styles.desContainer}>
               <Text style={styles.title}>Description</Text>
               <TextInput
                placeholderTextColor="gray"
                style={{width:'100%',height:250,padding:5}}
                textAlignVertical="top"
                multiline={true}
               />
           </View>
            <View style={styles.buttonView}>
                <TouchableOpacity
                 style={[styles.textInputBackground,{backgroundColor:'#8BA5FA'}]}
                 onPress={()=>NavigationService.navigate(Screens.Home)}
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

export default Feedback;