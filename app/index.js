import React, { useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/reducer'

import NavigationService from './navigation/NavigationService.js'
import OnBoardScreens from './screens/board/index.js'
import SignBoard from './screens/signboard/index.js';
import Login from './screens/login/Login'
import Achievement from './screens/achieve/Achievement'
import Description from './screens/description/Description'
import Outcome from './screens/outcome/Outcome'
import Attach from './screens/attach/Attach'
import Experience from './screens/experience/Experience'
// import Congrats from './screens/congrats/Congrats.js';
import Home from './screens/home /Home.js';
import Feedback from './screens/feedback/Feedback.js';
import EditProfile from './screens/editprofile/EditProfile.js';
import { useGlobalState } from './state/GlobalState';
import { Alert } from 'react-native';
import "./helpers/AxiosBootstrap"

const MainStack = createStackNavigator(
  {
    OnBoardScreens: { screen: OnBoardScreens },
    SignBoard: { screen: SignBoard },
    Login: { screen: Login },
    Achievement: { screen: Achievement },
    Description: { screen: Description },
    Outcome: { screen: Outcome },
    Attach: { screen: Attach },
    Experience: { screen: Experience },
    // Congrats:{screen:Congrats},
    Home: { screen: Home },
    EditProfile: { screen: EditProfile },
    Feedback: { screen: Feedback }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerShown: false
      }
    }
  }
)

const RootStack = createDrawerNavigator(
  {
    MainStack: {
      screen: MainStack,
      // defaultNavigationOptions:{
      //     drawerLockMode: 'locked-open',
      // }

    }
  }
  // {
  //     drawerWidth: Dimensions.deviceWidth*0.5,
  //     contentComponent: Menu
  //   }
)


const AppMain = () => {

  const [error] = useGlobalState('error')

  useEffect(() => {
    console.log('error', error)
    if (error) {
      Alert.alert('Error', error.toString())
    }
  }, [error])

  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
  const Apps = createAppContainer(RootStack)
  return (
    <Provider store={store}>
      <Apps
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    </Provider>

  );
}

export default AppMain;
