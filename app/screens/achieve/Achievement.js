import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, Image, Modal, SafeAreaView, CheckBox, StatusBar } from 'react-native'
import { Icon } from 'native-base'
import Images from '../../constants/image'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'
import { useGlobalState } from '../../state/GlobalState'

const Achievement = () => {
  const [profile] = useGlobalState('profile')
  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.achieveView}>
        <View style={styles.profileView}>
          <Image source={Images.Avatar} style={styles.profileImage} />
          <Text style={styles.profileTitle}>Welcome {profile.firstName}!</Text>
        </View>
        <Text style={styles.profileTitle}>Let’s start your onboarding by adding one achievement:</Text>
        <View style={styles.textInputBackground}>
          <TextInput
            style={styles.textInput}
            placeholder="Title"
            autoCompleteType={'name'}
          />
        </View>
        <View style={styles.textInputBackground}>
          <TextInput
            style={styles.textInput}
            placeholder="Month/year"
            autoCompleteType={'name'}
          />
        </View>
        <View style={styles.textInputBackground}>
          <TextInput
            style={styles.textInput}
            placeholder="Company/organism"
            autoCompleteType={'name'}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={[styles.textInputBackground, { backgroundColor: '#8BA5FA' }]}
            onPress={() => NavigationService.navigate(Screens.Description)}
          >
            <Text style={styles.buttonText}>
              Next
                   </Text>

          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Achievement;
