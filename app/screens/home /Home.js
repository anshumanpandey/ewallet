import React, { Component } from 'react'
import {View} from 'react-native'
import Header from '../../components/Header'
import styles from './styles'
import Footer from '../../components/Footer'
import Profile from '../profile/Profile'
import Passport from '../passport/Passport'
import FingerPrint from '../finger/FingerPrint'
import DetailPassport from '../detail/DetailPassport'
import FullFeedback from '../fullfeedback/FullFeedback'
import EditProfile from '../editprofile/EditProfile'
import Settings from '../settings/Settings'

class Home extends Component {
   
  constructor(props){
    super(props)
    this.state ={
        tab:5
    }
  }
  onTabClick = (index) =>{
     this.setState({tab:index})
  }
  render() {
    const{tab}=this.state
    return (
      <View style={styles.container}>
         {
           tab !==2&&(
            <Header onTabClick={this.onTabClick}/>
           )
         }
        
           <View style={styles.mainView}>
              {
               tab ===6 &&(
                 <Settings onTabClick={this.onTabClick}/> 
               )
             }
             {
               tab ===5 &&(
                 <Profile onTabClick={this.onTabClick}/> 
               )
             }
             {
               tab ===1 &&(
                <FingerPrint onTabClick={this.onTabClick}/> 
              )
             }
              {
               tab ===0 &&(
                <Passport onTabClick={this.onTabClick}/> 
              )
             }
             {
               tab ===2 &&(
                 <EditProfile onTabClick={this.onTabClick}/>
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
