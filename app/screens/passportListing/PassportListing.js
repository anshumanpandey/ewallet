import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, SafeAreaView, Alert } from 'react-native'
import { Icon, Spinner } from 'native-base'
import styles from './styles'
import { useGlobalState, dispatchGlobalState, GLOBAL_STATE_ACTIONS } from '../../state/GlobalState'
import { Formik } from 'formik';
import ErrorLabel from '../../components/ErrorLabel'
import useAxios from 'axios-hooks'
import GlobalStyles from '../../constants/globalStyles'
import NavigationService from '../../navigation/NavigationService'
import { FlatList } from 'react-native-gesture-handler'

const PassportListing = (props) => {
  const [{ loading, data }, refetch] = useAxios({
    url: '/passport',
  })

  const [doDeleteReq, doDelete] = useAxios({
    url: '/passport',
    method: 'DELETE'
  }, { manual: true })

  useEffect(() => {
    refetch()
    const { navigation } = props;
    const focusListener = navigation.addListener('didFocus', () => refetch());
    return () => focusListener?.remove()
  }, [])

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      {(doDeleteReq.loading || loading) && (
        <View style={{ zIndex: 2, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,0.8)', justifyContent: 'center', alignItems: 'center' }}>
          <Spinner color={"#8BA5FA"} size={120} />
        </View>
      )}

      <View style={styles.loginContainer}>

        <View style={styles.loginInfoArea}>
          <View style={styles.backView}>
            <TouchableOpacity
              style={styles.backView}
              onPress={() => {
                if (props.onTabClick) {
                  props.onTabClick(5)
                } else {
                  props.navigation.goBack()
                }
              }}
            >
              <Icon type="Ionicons" name="ios-arrow-round-back" />
              <Text
                style={styles.backTitle}>
                Back
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
              disabled={doDeleteReq.loading}
              style={[styles.textInputBackground, { backgroundColor: '#8BA5FA', marginLeft: 'auto' }]}
              onPress={() => NavigationService.navigate("CreatePassport")}
            >
              <Text style={styles.buttonText}>New passport</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.signupTitleView}>
            <Text style={styles.signupTitle}>Passports</Text>
          </View>

          <FlatList
            ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: '15%'}}>No passport created</Text>}
            data={data}
            keyExtractor={i => i.id}
            renderItem={({ item }) => {
              return (
                <View style={{ padding: '5%', borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.5)', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity style={{ width: '80%' }} disabled={doDeleteReq.loading} onPress={() => NavigationService.navigate("CreatePassport", { ...item, title: 'Edit Passport' })} >
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity disabled={doDeleteReq.loading} onPress={() => {
                    Alert.alert("", "Are you sure you want to delete this passport?", [
                      {
                        text: 'Yes',
                        onPress: () => doDelete({ data: { id: item.id } }).then(() => refetch())
                      },
                      {
                        text: 'Cancel',
                        style: 'cancel'
                      },
                    ])
                  }}>
                    <Icon style={{ color: '#8BA5FA' }} type="MaterialCommunityIcons" name="delete" />
                  </TouchableOpacity>
                </View>
              );
            }}
          />


        </View>


      </View>
    </SafeAreaView>
  )
}

export default PassportListing;