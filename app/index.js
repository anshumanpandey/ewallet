import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NavigationService from './navigation/NavigationService.js'
import OnBoardScreens from './screens/board/index.js'
import SignUp from './screens/signup/SignUp.js';
import Login from './screens/login/Login'
import Achievement from './screens/achieve/Achievement'
import Description from './screens/description/Description'
import Outcome from './screens/outcome/Outcome'
import Attach from './screens/attach/Attach'
import Experience from './screens/experience/Experience'
import Congrats from './screens/congrats/Congrats.js';
import Home from './screens/home /Home.js';
import Feedback from './screens/feedback/Feedback.js';
import EditProfile from './screens/editprofile/EditProfile.js';

const MainStack = createStackNavigator(
    {     
          OnBoardScreens:{screen:OnBoardScreens},
          SignUp:{screen:SignUp}, 
          Login:{screen:Login},
          Achievement:{screen:Achievement},
          Description:{screen:Description},
          Outcome:{screen:Outcome},
          Attach:{screen:Attach},
          Experience:{screen:Experience},
          Congrats:{screen:Congrats},
          Home:{screen:Home},
          EditProfile:{screen:EditProfile},
          Feedback:{screen:Feedback}
    },
    {
        defaultNavigationOptions:({navigation})=>{
            return{
                header:null
            }
        }
    }
)


const AppMain =()=> {
    const Apps = createAppContainer(MainStack);
  return (
    <Apps
    ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef)
      }}
    />
  );
}

export default AppMain;
