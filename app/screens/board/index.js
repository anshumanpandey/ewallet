import React, { Component } from 'react'
import {View,StatusBar} from 'react-native'
import Swiper from 'react-native-swiper'
import BoardScreen1 from './BoardScreen1'
import BoardScreen2 from './BoardScreen2'
import BoardScreen3 from './BoardScreen3'
import BoardScreen4 from './BoardScreen4'
import BoardScreen5 from './BoardScreen5'
import LoginScreen from '../login/Login'

class OnBoardScreens extends Component {
    
  render() {
    return (
       <Swiper>
         <BoardScreen1/>
         <BoardScreen2/>
         <BoardScreen3/>
         <BoardScreen4/>
         <BoardScreen5/>
         <LoginScreen/>
       </Swiper>
    )
  }
}

export default OnBoardScreens
