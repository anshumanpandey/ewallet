import React from 'react';
import {View,StyleSheet,Image,TouchableOpacity} from 'react-native'
import Images from '../constants/image'


 const Footer =(props) =>{
  return (
    <View style={styles.container}>
        <TouchableOpacity
         onPress={()=>props.onTabClick(0)}
        >
           <Image source={Images.Star}
             style={{width:16,height:16}}
             />
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>props.onTabClick(1)}
        >
            <Image source={Images.Print}
             style={{width:25,height:25}}
            />
        </TouchableOpacity>
         <TouchableOpacity
          onPress={()=>props.onTabClick(2)}
         >
            <Image source={Images.Profile}
             style={{width:40,height:40}}
            />
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