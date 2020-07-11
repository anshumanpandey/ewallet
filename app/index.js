import React, { useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/reducer'

import NavigationService from './navigation/NavigationService.js'
import Register from './screens/signup/SignUp'
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
import { useGlobalState, dispatchGlobalState, GLOBAL_STATE_ACTIONS } from './state/GlobalState';
import { Alert } from 'react-native';
import Toast from 'react-native-simple-toast';
import "./helpers/AxiosBootstrap"

const AppMain = () => {

  const [error] = useGlobalState('error')
  const [success] = useGlobalState('success')
  const [token] = useGlobalState('token')

  useEffect(() => {
    console.log('error', error)
    if (error) {
      Alert.alert('Error', error.toString())
      dispatchGlobalState({ type: GLOBAL_STATE_ACTIONS.ERROR, state: null })
    }
  }, [error])

  useEffect(() => {
    console.log('success', error)
    if (success) {
      Toast.show(success, Toast.LONG)
      dispatchGlobalState({ type: GLOBAL_STATE_ACTIONS.SUCCESS, state: null })
    }
  }, [success])

  let screens = {
    OnBoardScreens: { screen: OnBoardScreens },
    Login: { screen: Login },
    SignBoard: { screen: SignBoard },
    Register: { screen: Register },
  };

  if (token) {
    screens = {}
    screens.Home = { screen: Home },
    screens.Achievement = { screen: Achievement },
    screens.Description = { screen: Description },
    screens.Outcome = { screen: Outcome },
    screens.Attach = { screen: Attach },
    screens.Experience = { screen: Experience },
    screens.EditProfile = { screen: EditProfile },
    screens.Feedback = { screen: Feedback }

    screens.OnBoardScreens = { screen: OnBoardScreens }
    screens.Login = { screen: Login }
    screens.SignBoard = { screen: SignBoard }
  }

  const MainStack = createStackNavigator(screens,    
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
      }
    }
  )

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
