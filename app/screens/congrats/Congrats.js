import React from 'react';

import {View,Text,StatusBar,ImageBackground,StyleSheet,Image,TouchableOpacity} from 'react-native'
import {Icon} from 'native-base'

import Images from '../../constants/image'
import Dimensions from '../../constants/dimensions'
import NavigationService from '../../navigation/NavigationService';
import Screens from '../../constants/screens'

const styles = StyleSheet.create({
   wrapper:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
   },
   imageBook:{
     marginBottom:Dimensions.px40
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
    
     letterSpacing:-0.03,
     lineHeight:32,
     fontSize:24,
     textAlign:'center',
     marginTop:Dimensions.px20,
     color:'#fff',
     fontFamily:'RedHatDisplay-Bold'
   },
   desContainer:{
      marginTop:Dimensions.px60
   },
   detailView:{
     display:'flex',
     flexDirection:'row',
     alignItems:'center'
   },
   detailText:{
    fontFamily:'RedHatDisplay-Regular',
    fontSize:18,
    marginLeft:Dimensions.px20,
    color:'#fff'
   }
})

export default function Congrats() {
  const data=[
    "Build your life,not a resume.",
    "Enhanced your achievements.",
    "Leverage your network feedback",
    "Keep progressing."
  ]
  return (
    <ImageBackground
         source={Images.BoardBackground}
         style={styles.wrapper}
       >
     
    <Image
      source={Images.Cup}
      style={styles.imageBook}
    />
    <View
     style={styles.viewContainer}
    >
        <Image
          source={Images.Passport}
          style={styles.passportImage}
        />
        <Text
         style={styles.title}
        >
          Congratulations Dustin! Your Passport is ready
        </Text>
        <View style={{marginTop:20,width:'100%',justifyContent:'flex-end',flexDirection:'row',paddingHorizontal:20}}>
        <TouchableOpacity
         onPress={()=>NavigationService.navigate(Screens.Home)}
        >
          <Text style={{color:'#fff'}}>Passer</Text>
        </TouchableOpacity>
       
      </View>
    </View>
       
    </ImageBackground>
  );
}



