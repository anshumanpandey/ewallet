import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native'

import { Data } from './data'
import styles from './styles'
import screens from '../../constants/screens'
import NavigationService from '../../navigation/NavigationService';
import Share from 'react-native-share';
import GlobalStyles from '../../constants/globalStyles';
import { dispatchGlobalState, GLOBAL_STATE_ACTIONS } from '../../state/GlobalState';

const ItemCard = ({ item, onTabClick }) => {

  onSwitch = (path) => {

    if (path === 'FingerPrint') {
      onTabClick(14)
    }
    else if (path === 'EditProfile') {
      NavigationService.navigate(path)
    }
    else if (path === 'Achievement') {
      onTabClick(7)
    }
    else if (path === 'Feedback') {
      NavigationService.navigate(path)

    }
    else if (path === 'Recommend') {
      NavigationService.navigate(screens.Experience)

    }
    else if (path === 'Share') {
      let shareOptions = {
        title: "eWallet",
        message: "Hello",
        url: "http://facebook.github.io/react-native/",
        subject: "Share Link" //  for email
      };
      Share.open(shareOptions).catch((err) => { err && console.log(err); })
    }
    else {
      let shareOptions = {
        title: "eWallet",
        message: "Hello ",
        url: "http://facebook.github.io/react-native/",
        subject: "Share Link" //  for email
      };
      Share.open(shareOptions).catch((err) => { err && console.log(err); })
    }

  }
  return (
    <TouchableOpacity
      disabled={item.disabled}
      onPress={
        () => onSwitch(item.path)
      }
    >
      <View style={[styles.card, item.disabled && GlobalStyles.disabledButton]}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={item.iconType} style={{ width: 40, height: 40, opacity: item.disabled ? 0.5 : 1 }} />
          <Text style={{ textAlign: 'center', marginTop: 15, paddingHorizontal: 30, fontSize: 12, color: item.disabled ? 'gray' : 'black' }}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const Profile = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={false}
        data={Data}
        style={{ paddingHorizontal: 20 }}
        numColumns={2}
        keyExtractor={item => item.id}
        ListFooterComponent={
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
        }
        renderItem={({ item }) =>
          <ItemCard
            item={item}
            onTabClick={props.onTabClick} />
        }
      />
    </View>
  );
}

export default Profile;

