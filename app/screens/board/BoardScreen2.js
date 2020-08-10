import React from 'react';

import {View,Text,StatusBar,ImageBackground,StyleSheet,Image,TouchableHighlight,TouchableOpacity} from 'react-native'
import {Icon} from 'native-base'
import NavigationService from '../../navigation/NavigationService.js'
import Screens from '../../constants/screens'
import Images from '../../constants/image'
import Dimensions from '../../constants/dimensions'



const styles = StyleSheet.create({
   wrapper:{
      flex:1,
      alignItems:'center'
   },
   imageBook:{
     marginTop:30
   },
   viewContainer:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
   },
   passportImage:{
     resizeMode:'contain',
   },
   title:{
     paddingHorizontal:58,
     letterSpacing:-0.03,
     lineHeight:32,
     fontSize:24,
     textAlign:'center',
     marginTop:Dimensions.px20,
     color:'#fff',
     fontFamily:'RedHatDisplay-Bold'
   },
   desContainer:{
      marginTop:Dimensions.px25,
      backgroundColor:'#fff',
      width:'90%',
      borderRadius:10,
      padding:15
   },
   detailView:{
     display:'flex',
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between'
   },
   detailText:{
    fontFamily:'RedHatDisplay-Regular',
    fontWeight:"500",
    fontSize:20,
    lineHeight:26,
    maxWidth:Dimensions.px160,
    color:'#120E21'
   },
   desText:{
     fontSize:16,
     lineHeight:32,
     color:'#99879D',
     marginTop:10
   }
})

export default function BoardScreen2() {
  
  return (
    <ImageBackground
         source={Images.BoardBackground}
         style={styles.wrapper}
       >
       <StatusBar hidden={true}/>  
      <View style={{marginTop:20,width:'100%',justifyContent:'flex-end',flexDirection:'row',paddingHorizontal:20}}>
        <TouchableOpacity
         onPress={()=>NavigationService.navigate(Screens.Login)}
        >
          <Text style={{color:'#fff'}}>Passer</Text>
        </TouchableOpacity>
       
      </View>
    <Image
      source={Images.Cup}
      style={styles.imageBook}
    />
    <View
     style={styles.viewContainer}
    >
        <Text style={styles.title}>
         Enrich your Passports with meaningful achievements:
        </Text>
    </View>

    <View style={styles.desContainer}>
      <View style={styles.detailView}>
         <Text style={styles.detailText}>Certified PMP Project Manager</Text>
         <Image source={Images.Hat}/>     
       </View>
       <Text style={styles.desText}>
        The PMP is the gold standard of project management certification. Recognized by organizations worldwide. Meet the demands of projects and employers across the globe.
       </Text>
       <View style={[styles.detailView,{marginTop:10}]}>
          <View>
             <Text style={{fontSize:20,color:'#120E21'}}>Additionnal</Text>
             <Text>2020</Text>
          </View>
           <TouchableHighlight
            style={{padding:10,backgroundColor:'#FBEAFF',borderRadius:4}}
           >
              <Text>Certification</Text>
           </TouchableHighlight>
       </View>
    </View>
       
    </ImageBackground>
  );
}



