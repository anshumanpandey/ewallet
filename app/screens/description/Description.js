import React,{useState} from 'react'
import {StyleSheet,View,Text,TouchableOpacity,ImageBackground,TextInput,ScrollView,Image,Modal,SafeAreaView,CheckBox, StatusBar} from 'react-native'
import {Icon} from 'native-base'
import Images from '../../constants/image'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'

 const Description =()=> {
  return (
    <ScrollView style={styles.container}>
        <StatusBar hidden={true}/>
       <View style={styles.achieveView}>
           <View style={styles.backView}>
               <TouchableOpacity
                style={styles.backView}
                onPress={()=>NavigationService.navigate(Screens.Achievement)}
                >
                    <Icon type="Ionicons" name="ios-arrow-round-back"/>
                    <Text style={styles.backTitle}>Back</Text>
               </TouchableOpacity>
             
           </View>
           <Text style={styles.desTitle}>Describe shortly your achievement with 30 words (max):</Text>
           <View style={styles.desContainer}>
               <Text style={styles.title}>Description</Text>
               <TextInput
                style={{width:'100%',height:250,padding:5}}
                textAlignVertical="top"
                multiline={true}
    
               />
           </View>
            <View style={{marginTop:40}}>
               
                <View style={styles.tipView}>
                 <Image source={Images.Lamp} style={{position:'absolute',top:-30,left:0}}/>
                    <Text style={{color:"#99879D",fontSize:16}}>Tips</Text>
                </View>
                <Text style={styles.context}>Give some context, sum-up the challenge, how did you acommplish that, share your learnings, tell everyone the outcome...</Text>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity
                 style={[styles.textInputBackground,{backgroundColor:'#8BA5FA'}]}
                 onPress={()=>NavigationService.navigate(Screens.Outcome)}
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

export default Description;