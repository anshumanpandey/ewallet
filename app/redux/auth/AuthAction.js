
import {ActionTypes} from '../ActionTypes'
import NavigationService from '../../navigation/NavigationService'
import * as Services from '../../api/index'
import {AsyncStorage} from 'react-native'
import Screens from '../../constants/screens'
import setAuthToken from "../../utils/setAuthToken";

export const signUpUser =(firstName,lastName,email,password,phoneNumber,career)=>{
  
    return dispatch => {
        dispatch({ type: ActionTypes.SIGNUP_USER_START })
        // Services.signIn(email, password)
        //   .then((data) => {
      
        //     setAuthToken(data.accessToken)
        //     console.log("token")
        //     AsyncStorage.setItem("token", data.accessToken)
            // loginUserSuccess(dispatch, data, email, password)
            AsyncStorage.setItem("athentication",JSON.stringify({
                fname:firstName,
                lname:lastName,
                email:email,
                password:password,
                number:phoneNumber,
                career:career

            }) );
            dispatch({
                type:ActionTypes.SIGNUP_USER_SUCCESS,
                payload:{
                    fname:firstName,
                    lname:lastName,
                    email:email,
                    password:password,
                    number:phoneNumber,
                    career:career

                }})
              
        //   })
        //   .catch((errMsg) => {
        //     console.log(errMsg)
        //     loginUserFail(dispatch, 'Email or Password Incorrect!')
        //   })
      }
}