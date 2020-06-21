import React from 'react';

import {View,Text,StatusBar,ImageBackground,StyleSheet,Image,TouchableOpacity} from 'react-native'
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
     maxWidth:300,
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

export default function BoardScreen1() {
  const data=[
    "No profile-search database.",
    "Decide who you share your Passport with.",
    "No likes, no feed, no score.",
    "You are in control."
  ]
  return (
    <ImageBackground
         source={Images.BoardBackground}
         style={styles.wrapper}
       >
             <StatusBar hidden={true}/>  
      <View style={{marginTop:20,width:'100%',justifyContent:'flex-end',flexDirection:'row',paddingHorizontal:20}}>
      <TouchableOpacity
        onPress={()=>NavigationService.navigate(Screens.SignUp)}
      >
          <Text style={{color:'#fff'}}>Passer</Text>
        </TouchableOpacity>
      </View>
    <Image
      source={Images.Mark}
      style={styles.imageBook}
    />
    <View
     style={styles.viewContainer}
    >
    
        <Text
         style={styles.title}
        >
         One last thing: because your career is personal, Passport is not a social network. 
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



