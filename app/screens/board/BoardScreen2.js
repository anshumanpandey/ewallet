import React from 'react';

import {View,Text,StatusBar,ImageBackground} from 'react-native'
import Images from '../../constants/image'

export default function BoardScreen2() {
  return (
    <ImageBackground
         source={Images.BoardBackground}
         style={{width:'100%',flex:1}}
       >
        
        
    </ImageBackground>
  );
}