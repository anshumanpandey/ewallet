import React from 'react';
import {View,Text,Image,StyleSheet, StatusBar} from 'react-native'
import {Icon} from 'native-base'
import Images from '../constants/image'
import { TouchableOpacity } from 'react-native-gesture-handler';



 const Header =() =>{
  return (
    <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.profileView}>
            <Image source={Images.Avatar}/>
            <View style={{marginLeft:10}}>
                <Text style={styles.title}>Dustin Warren</Text>
                <Text style={styles.jobTitle}>Current Job</Text>
                <Text style={styles.jobTitle}>Current Company</Text>
            </View>
        </View>
        <TouchableOpacity>
             <Image source={Images.Tool} style={{marginTop:10}}/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:20,
        justifyContent:'space-between',
        flexDirection:'row',
    },
    profileView:{
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        fontSize:25,
        lineHeight:33,
        fontFamily:'RedHatDisplay-Bold'
    },
    jobTitle:{
        fontSize:16,
        lineHeight:19,
        color:'#99879D'
    }
})


export default Header;