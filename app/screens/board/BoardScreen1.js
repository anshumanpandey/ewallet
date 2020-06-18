import React from 'react';

import {View,Text,StatusBar,ImageBackground,StyleSheet,Image} from 'react-native'
import {Icon} from 'native-base'
import Images from '../../constants/image'
import Dimensions from '../../constants/dimensions'


const styles = StyleSheet.create({
   wrapper:{
      flex:1,
      alignItems:'center'
   },
   imageBook:{
     marginTop:Dimensions.pro5
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
    fontSize:20,
    marginLeft:Dimensions.px20,
    color:'#fff'
   }
})

export default function BoardScreen1() {
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
      source={Images.Book}
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
          Welcome to your first Career Companion!
        </Text>
    </View>

    <View 
     style={styles.desContainer}
    >
      {
        data.map(item=>(
           
           <View style={styles.detailView}>
              <Icon type="Entypo" name="circle" style={{color:'#fff',fontSize:16}}/>
              <Text style={styles.detailText}>{item}</Text>
           </View>

        ))
      }
      
    </View>
       
    </ImageBackground>
  );
}



