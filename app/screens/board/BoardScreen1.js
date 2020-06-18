import React from 'react';

import {View,Text,StatusBar,ImageBackground,StyleSheet,Image} from 'react-native'
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
     fontWeight:'bold',
     lineHeight:32,
     fontSize:24,
     textAlign:'center',
     marginTop:Dimensions.px20,
     color:'#fff'
   }
})

export default function BoardScreen1() {
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
       
    </ImageBackground>
  );
}



