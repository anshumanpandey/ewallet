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
     marginTop:Dimensions.pro20
   },
   viewContainer1:{
    marginTop:Dimensions.px40,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
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
     maxWidth:Dimensions.px300,
     letterSpacing:-0.03,
     lineHeight:32,
     fontSize:24,
     textAlign:'center',
     marginTop:Dimensions.px20,
     color:'#fff',
     fontFamily:'RedHatDisplay-Bold'
   },
   desContainer:{
      marginTop:Dimensions.px60,
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
    maxWidth:Dimensions.px160,
    color:'#120E21'
   },
   desText:{
     fontSize:16,
     color:'#99879D',
     marginTop:10
   }
})

export default function BoardScreen4() {
  
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
          <Text style={{color:'#fff'}}>Skip</Text>
        </TouchableOpacity>
      </View>
    <View
     style={styles.viewContainer1}
    >
        <Text
         style={styles.title}
        >
       Do you ever feel that you could have a career in different roles?
        </Text>
    </View>
    <View
     style={styles.viewContainer}
    >
        <Text
         style={styles.title}
        >
        We agree. That’s why you can customized up to 5 different passports and define sharing options.
        </Text>
    </View>

    <View 
     style={styles.desContainer}
    >
     <Image source={Images.Finger}/>
    </View>
       
    </ImageBackground>
  );
}



