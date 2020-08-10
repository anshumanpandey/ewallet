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
     marginTop:30,
     height: 110,
     width: 110,
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
      source={Images.Hierarchy}
      style={styles.imageBook}
    />
    <View
     style={styles.viewContainer}
    >
        <Text
         style={styles.title}
        >
         Organize your career by creating different Passports:
        </Text>
    </View>

    <View style={styles.desContainer}>
      <View style={styles.detailView}>
         <Text style={styles.detailText}>Digital Expert - SEM</Text>
       </View>
    </View>
    <View style={styles.desContainer}>
      <View style={styles.detailView}>
         <Text style={styles.detailText}>Senior Account Manager</Text>
       </View>
    </View>
    <View style={styles.desContainer}>
      <View style={styles.detailView}>
         <Text style={styles.detailText}>Project Manager</Text>
       </View>
    </View>
       
    </ImageBackground>
  );
}



