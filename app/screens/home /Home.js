import React, { Component } from 'react'
import { View } from 'react-native'
import Header from '../../components/Header'
import styles from './styles'
import Footer from '../../components/Footer'
import Profile from '../profile/Profile'
import Passport from '../passport/Passport'
import FingerPrint from '../finger/FingerPrint'
import DetailPassport from '../detail/DetailPassport'
import FullFeedback from '../fullfeedback/FullFeedback'
import EditProfile from '../editprofile/EditProfile'
import Achievement from '../achieve/Achievement'
import { ScrollView } from 'react-native-gesture-handler'
import PassportListing from '../passportListing/PassportListing'
import PassportDetails from '../passportDetails/PassportDetails'
import AchievementListing from '../achievementListing/AchievementListing'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tab: 5
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      console.log(navigation.state)
      const { params } = this.props.navigation.state;
      if (params && params.tabIdx) {
        this.setState({ tab: params.tabIdx })
      }
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }
  onTabClick = (index, params) => {
    this.setState({ tab: index, params })
  }
  render() {
    const { tab } = this.state

    return (
      <>
        <ScrollView contentContainerStyle={styles.container}>
          {
            ![12,1,7,2,13, 14].includes(tab) && (
              <Header onTabClick={this.onTabClick} />
            )
          }

          <View style={styles.mainView}>
            {
              tab === 7 && (
                <Achievement title={"Let’s add a new achievement"} onTabClick={this.onTabClick} />
              )
            }
            {
              tab === 5 && (
                <Profile onTabClick={this.onTabClick} />
              )
            }
            {
              tab === 1 && (
                <FingerPrint onTabClick={this.onTabClick} {...this.state.params} />
              )
            }
            {
              tab === 0 && (
                <Passport onTabClick={this.onTabClick} />
              )
            }
            {
              tab === 2 && (
                <EditProfile onTabClick={this.onTabClick} />
              )
            }
            {
              tab === 3 && (
                <DetailPassport onTabClick={this.onTabClick} />
              )
            }
            {
              tab === 4 && (
                <FullFeedback onTabClick={this.onTabClick} />
              )
            }
            {
              tab === 12 && (
                <PassportListing onTabClick={this.onTabClick} />
              )
            }
            {
              tab === 13 && (
                <PassportDetails onTabClick={this.onTabClick} {...this.state.params} />
              )
            }
            {
              tab === 14 && (
                <AchievementListing onTabClick={this.onTabClick} {...this.state.params} />
              )
            }
          </View>
        </ScrollView>
        <Footer onTabClick={this.onTabClick} />
      </>
    )
  }
}


export default Home
