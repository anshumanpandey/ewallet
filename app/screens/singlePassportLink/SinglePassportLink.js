import React, { useState, useRef } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, Image, SafeAreaView, CheckBox, StatusBar } from 'react-native'
import { Formik } from 'formik';
import { Icon, Spinner } from 'native-base'
import moment from 'moment';
import Modal from 'react-native-modal';
import SmoothPicker from "react-native-smooth-picker";
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'
import { useGlobalState } from '../../state/GlobalState'
import ErrorLabel from '../../components/ErrorLabel';
import { dispatchAchivementFormState, ACHIVEMENT_STATE_ACTIONS, getAchivementFromState } from '../../state/AchivementFormState';
import useAxios from 'axios-hooks'
import DropDownPicker from 'react-native-dropdown-picker';
import * as Progress from 'react-native-progress';
import GlobalStyles from '../../constants/globalStyles';
import Images from '../../constants/image';

const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", " Oct", " Nov", "Dec"]
const Item = React.memo(({ opacity, selected, vertical, fontSize, item }) => {
  return (
    <View style={{ height: 40 }}>
      <Text style={{ color: selected ? '#8BA5FA' : 'black', borderColor: 'gray', paddingHorizontal: '15%', paddingVertical: '2%', textAlign: 'center', borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.2)', fontSize: 22 }}>{item}</Text>
    </View>
  );
});

const SinglePassportLink = (props) => {
  const [profile] = useGlobalState('profile')
  const formRef = useRef()

  const [passportReq] = useAxios({
    url: '/passport',
  })

  const [createReq, doCreate] = useAxios({
    url: '/achivement',
    method: 'POST'
}, { manual: true })

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={"handled"} style={styles.container}>
        <StatusBar hidden={true} />
        <View style={[styles.achieveView, { flexGrow: 1 }]}>
          <View style={styles.backView}>

            <TouchableOpacity
              style={styles.backView}
              onPress={() => {
                if (props.onTabClick) {
                  props.onTabClick(5)
                } else {
                  NavigationService.navigate(Screens.Home)
                }
              }}
            >
              <Icon type="Ionicons" name="ios-arrow-round-back" />
              <Text style={styles.backTitle}> Back</Text>
            </TouchableOpacity>
            {props?.navigation?.getParam("passer", false) == true && (
              <TouchableOpacity
                style={[styles.backView, { marginLeft: 'auto' }]}
                onPress={() => {
                  NavigationService.navigate(Screens.Home, { tabIdx: 5 })
                }}
              >
                <Text style={{ fontSize: 12, lineHeight: 14, color: '#9F8EA3' }}>Passer</Text>
              </TouchableOpacity>
            )}
          </View>
          <Formik
            innerRef={(r) => formRef.current = r}
            initialValues={{ passport: null }}
            onSubmit={values => {
              const currentFormState = getAchivementFromState()
              const jsonData = {
                ...currentFormState,
                month: moment(currentFormState.date).format("MM"),
                year: moment(currentFormState.date).format("YYYY"),
                passportId: values?.passport?.id || undefined
              }
              console.log(jsonData)
              const data = new FormData();

              if (jsonData['file']) {
                data.append('awardFile', {
                  uri: jsonData['file'].uri,
                  name: jsonData['file'].name,
                  type: jsonData['file'].type,
                })

                delete jsonData.file;
              }

              delete jsonData.date;

              Object.keys(jsonData).forEach(i => {
                console.log(i)
                data.append(i, jsonData[i])
              })


              doCreate({
                data,
                headers: {
                  "content-type": "multipart/form-data"
                }
              })
                .then((r) => {
                  console.log(r.data)
                  NavigationService.navigate(Screens.Congrats)
                })
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
              <>

                <View style={styles.profileView}>
                  <Text style={[styles.profileTitle, { fontSize: 18 }]}>
                    Would you like to associate your achievement to an existing Passport ?
                  </Text>
                </View>
                <Text style={[styles.profileTitle, { justifyContent: 'flex-start', textAlign: 'left', marginTop: '15%' }]}>Select:</Text>
                <DropDownPicker
                  items={passportReq.data && passportReq.data.length !== 0 ? passportReq.data.map(i => ({ label: i.name, value: i.id, ...i })) : []}
                  containerStyle={{ height: Dimension.px50, borderRadius: 8, marginTop: Dimension.px20, width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
                  style={{ backgroundColor: 'rgba(119, 194, 241, 0.1);', borderWidth: 0 }}
                  itemStyle={{ justifyContent: 'flex-start' }}
                  dropDownStyle={{ backgroundColor: '#fafafa' }}
                  placeholderStyle={{ color: 'gray' }}
                  onChangeItem={item => setFieldValue('passport', item)}
                />
                {errors.passport && touched.passport && <ErrorLabel text={errors.passport} />}

                <View style={[styles.buttonView, { marginTop: 'auto' }]}>
                  <TouchableOpacity
                    disabled={createReq.loading}
                    style={[styles.textInputBackground, { backgroundColor: '#8BA5FA' }, createReq.loading && GlobalStyles.disabledButton]}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.buttonText}>
                      Confirm
                   </Text>

                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SinglePassportLink;
