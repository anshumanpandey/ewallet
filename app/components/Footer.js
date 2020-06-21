import React from 'react';
import {View,StyleSheet,Image,TouchableOpacity} from 'react-native'
import Images from '../constants/image'


 const Footer =(props) =>{
  return (
    <View style={styles.container}>
        <TouchableOpacity
         onPress={()=>props.onTabClick(0)}
        >
           <Image source={Images.Star}/>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>props.onTabClick(1)}
        >
            <Image source={Images.Print}/>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={()=>props.onTabClick(2)}
         >
            <Image source={Images.Profile}/>
         </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

   container:{
       width:'100%',
       height:60,
       backgroundColor:'#F1F1F5',
       borderTopColor:'#848484',
       borderWidth:1,
       flexDirection:'row',
       justifyContent:'space-around',
       alignItems:'center'
   }
})

export default Footer;