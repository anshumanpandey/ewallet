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
    //  maxWidth:Dimensions.px300,
     paddingHorizontal:Dimensions.px40,
     letterSpacing:-0.03,
     lineHeight:32,
     fontSize:24,
     textAlign:'center',
     marginTop:Dimensions.px20,
     color:'#fff',
     fontFamily:'RedHatDisplay-Bold'
   },
   desContainer:{
     flex: 0.8,
      marginTop:Dimensions.px60,
      width:Dimensions.deviceWidth-30,
      backgroundColor:'#fff',
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
     width: '90%',
     fontSize:16,
     color:'#99879D',
     marginTop:10,
     marginLeft:10
   }
})

export default function BoardScreen3() {
  
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
      source={Images.Hand}
      style={styles.imageBook}
    />
    <View
     style={styles.viewContainer}
    >
        <Text
         style={styles.title}
        >
         Enhance your journey with true recommendations & skill mapping:
        </Text>
    </View>

    <View 
     style={styles.desContainer}
    >
      <View style={styles.detailView}>
         <Text style={styles.detailText}>Manager review</Text>
       </View>
       <View style={{flexDirection:'row',width:'85%',alignItems:'center'}}>
         <Image source={Images.Avatar}/>
         <Text numberOfLines={4} style={styles.desText}>Nec vox accusatoris ulla licet subditicii in his malorum quaerebatur acervis ut saltem specie tenus crimina praescriptis legum commit...ecie tenus crimina praescriptis legum commit...</Text>
       </View>
       <View style={{width:'100%',alignItems:'center',flexDirection:'row', flex: 1}}>
          <View>
             <Text style={{fontSize:16,fontWeight:'500',color:'#120E21'}}>Skills acquired</Text>
             <View style={styles.detailView}> 
             <TouchableHighlight
              style={{padding:10,borderColor:'#99879D',borderWidth:1,borderRadius:4}}
            >
                <Text style={{color:'#3DC35B'}}>OWNERSHIP</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{padding:10,borderColor:'#99879D',borderWidth:1,borderRadius:4,marginLeft:10}}
            >
                <Text style={{color:'#3DC35B'}}>DRIVE</Text>
            </TouchableHighlight>
             </View>
           
          </View>
          <View style={{marginLeft:20}}>
             <Text style={{fontSize:16,fontWeight:'500',color:'#120E21'}}>In development</Text>
             <View style={styles.detailView}> 
            <TouchableHighlight
              style={{padding:10,borderColor:'#99879D',borderWidth:1,borderRadius:4}}
            >
              <Text style={{color:'#83A0F4'}}>EXECUTION</Text>
            </TouchableHighlight>
             </View>
           
          </View>
        
       </View>
    </View>
       
    </ImageBackground>
  );
}



