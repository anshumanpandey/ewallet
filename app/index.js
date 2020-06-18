import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import OnBoardScreens from './screens/board/index.js'


const MainStack = createStackNavigator(
    {
          OnBoardScreens:{screen:OnBoardScreens}
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
    <Apps/>
  );
}

export default AppMain;
