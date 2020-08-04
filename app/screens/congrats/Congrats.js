import React from 'react';

import {View,Text,StatusBar,ImageBackground,StyleSheet,Image,TouchableOpacity} from 'react-native'
import {Icon} from 'native-base'

import Images from '../../constants/image'
import Dimensions from '../../constants/dimensions'
import NavigationService from '../../navigation/NavigationService';
import Screens from '../../constants/screens'
import { useGlobalState } from '../../state/GlobalState';

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
     fontFamily:'RedHatDisplay-Bold',
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
  const [profile] = useGlobalState('profile')
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
          Congratulations {profile.firstName}! Your Passport is ready
        </Text>
        <View style={{marginTop:20,width:'100%',alignItems:'center',flexDirection:'row'}}>
        <TouchableOpacity
         onPress={()=>NavigationService.navigate(Screens.Home, { tabIdx: 1 })}
        >
          <Text style={{color:'#fff'}}>Passer</Text>
        </TouchableOpacity>
       
      </View>
    </View>
       
    </ImageBackground>
  );
}



