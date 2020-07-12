import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native'
import styles from './styles'
import { dispatchGlobalState, GLOBAL_STATE_ACTIONS } from '../../state/GlobalState';


const Settings = (props) => {

  return (

    <ScrollView style={styles.container}>

        <View style={styles.loginInfoArea}>

          <View style={styles.buttonView}>
            <TouchableOpacity
              style={[styles.textInputBackground, { backgroundColor: '#8BA5FA' }]}
              onPress={() => {
                dispatchGlobalState({ type: GLOBAL_STATE_ACTIONS.LOGOUT })
              }}
            >
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>


    </ScrollView>


  )
}

export default Settings;