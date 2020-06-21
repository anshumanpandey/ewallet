import React, { Component } from 'react'
import {View,StyleSheet} from 'react-native'
import Header from '../../components/Header'
import styles from './styles'
import Footer from '../../components/Footer'
import Profile from '../profile/Profile'
import Passport from '../passport/Passport'
import FingerPrint from '../finger/FingerPrint'
import DetailPassport from '../detail/DetailPassport'
import FullFeedback from '../fullfeedback/FullFeedback'

class Home extends Component {
   
  constructor(props){
    super(props)
    this.state ={
        tab:2
    }
  }
  onTabClick = (index) =>{
     this.setState({tab:index})
  }
  render() {
    const{tab}=this.state
    return (
      <View style={styles.container}>
          <Header/>
           <View style={styles.mainView}>
             {
               tab ===2 &&(
                 <Profile onTabClick={this.onTabClick}/> 
               )
             }
             {
               tab ===1 &&(
                <FingerPrint/> 
              )
             }
              {
               tab ===0 &&(
                <Passport onTabClick={this.onTabClick}/> 
              )
             }
             {
               tab ===3 && (
                 <DetailPassport onTabClick={this.onTabClick}/>
               )
             }
             {
               tab ===4 &&(
                  <FullFeedback onTabClick={this.onTabClick}/>
               )
             }
           </View>
           <Footer onTabClick={this.onTabClick}/>
      </View>
    )
  }
}


export default Home
