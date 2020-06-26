import React,{useState} from 'react'
import {StyleSheet,View,Text,TouchableOpacity,ImageBackground,TextInput,ScrollView,Image,Modal,SafeAreaView,CheckBox, StatusBar} from 'react-native'
import {Icon} from 'native-base'
import Images from '../../constants/image'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'

 const Outcome =()=> {
  return (
    <ScrollView style={styles.container}>
        <StatusBar hidden={true}/>
       <View style={styles.achieveView}>
           <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
               <TouchableOpacity
                style={styles.backView}
                onPress={()=>NavigationService.navigate(Screens.Description)}
                >
                    <Icon type="Ionicons" name="ios-arrow-round-back"/>
                    <Text style={styles.backTitle}>Back</Text>
               </TouchableOpacity>
               <Text style={{fontSize:12,lineHeight:14,color:'#9F8EA3'}}>Skip</Text>
           </View>
           <Text style={styles.desTitle}>Do you have any tangible outcome? It’s absolutely fine if you don’t!</Text>
            <View style={{marginTop:40}}>
            <View style={styles.textInputBackground}>
                  <TextInput
                  style={styles.textInput}
                  placeholder="Title"
                  autoCompleteType={'name'}
                  />        
            </View>
            <View style={styles.textInputBackground}>
                  <TextInput
                  style={styles.textInput}
                  placeholder="Result"
                  autoCompleteType={'name'}
                  />        
            </View>
            <View style={styles.textInputBackground}>
                  <TextInput
                  style={styles.textInput}
                  placeholder="Value"
                  autoCompleteType={'name'}
                  />        
            </View>

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
                 onPress={()=>NavigationService.navigate(Screens.Attach)}
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

export default Outcome;