import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import Congrats from '../congrats/Congrats'
import Login from '../login/Login'


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
          <Login/>
       </Swiper>
    )
  }
}

export default SignBoard
