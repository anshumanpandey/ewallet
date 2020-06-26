import React, { Component } from 'react'
import {View,StatusBar} from 'react-native'
import Swiper from 'react-native-swiper'
import Congrats from '../congrats/Congrats'
import SignUp from '../signup/SignUp'


class SignBoard extends Component {
    
    constructor(props){
        super(props)
        this.state={
            showPaginate: true,
        }
    } 
 
    
  render() {
    return (
       <Swiper
        autoplay={false}
        loop={false}
        index={0}
        showsPagination={false}
       >
          <Congrats/>
          <SignUp/>
       </Swiper>
    )
  }
}

export default SignBoard
