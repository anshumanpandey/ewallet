import React from 'react';
import {View,Text,Image,StyleSheet, StatusBar} from 'react-native'
import Images from '../constants/image'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ErrorLabel =(props) =>{
  return (
    <Text style={styles.text}>{props.text}</Text>
  );
}

const styles = StyleSheet.create({
    text:{
        color:'rgba(252, 0, 0, 40)',
    },
})


export default ErrorLabel;