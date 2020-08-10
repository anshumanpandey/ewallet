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
import { dispatchAchivementFormState, ACHIVEMENT_STATE_ACTIONS } from '../../state/AchivementFormState';
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

const FirstPassport = (props) => {
  const [profile] = useGlobalState('profile')
  const [show, setShow] = useState(false);
  const [month, setMonth] = useState('Jan');
  const [year, setYear] = useState(moment().year().toString());
  const formRef = useRef()

  const [createPassportReq, createPassport] = useAxios({
    url: '/passport/create',
    method: 'POST'
  }, { manual: true })

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView keyboardShouldPersistTaps={"handled"} style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.achieveView}>
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
            initialValues={{ title: '' }}
            validate={(values) => {
              const errors = {}
              if (!values.title) errors.title = "Required"

              return errors
            }}
            onSubmit={values => {
              createPassport({ data: { name: values.title } })
                .then((r) => {
                  console.log(r.data)
                  dispatchAchivementFormState({ type: ACHIVEMENT_STATE_ACTIONS.STEP_ZERO, state: {passportId: r.data.id} })
                  NavigationService.navigate(Screens.Achievement, { title: "You can now create your first achievement or do it later:", hidePicker: true })
                })
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
              <>

                <View style={styles.profileView}>
                  <Text style={styles.profileTitle}>Let’s start your onboarding by creating a Passport.</Text>
                </View>
                <Text style={[styles.profileTitle, { justifyContent: 'flex-start', textAlign: 'left' }]}>Title:</Text>
                <View style={[styles.textInputBackground]}>
                  <TextInput
                    placeholderTextColor="gray"
                    style={styles.textInput}
                    placeholder="Examples: “Account Manager”, “Digital Nomad”"
                    autoCompleteType={'name'}
                    onChangeText={handleChange('title')}
                    onBlur={handleBlur('title')}
                    value={values.title}
                  />
                </View>
                {errors.title && touched.title && <ErrorLabel text={errors.title} />}

                <View style={[styles.tipView, { marginTop: '10%'}]}>
                  <Image source={Images.Lamp} style={{ position: 'absolute', top: -30, left: 0 }} />
                  <Text style={{ color: "#99879D", fontSize: 16 }}>Tips</Text>
                </View>
                <Text style={styles.context}>
                  You can create up to 5 different Passports and arrange your achievements associated. 
                </Text>

                <View style={styles.buttonView}>
                  <TouchableOpacity
                    disabled={createPassportReq.loading}
                    style={[styles.textInputBackground, { backgroundColor: '#8BA5FA' }, createPassportReq.loading && GlobalStyles.disabledButton]}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.buttonText}>
                      Next
                   </Text>

                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        <Modal onBackdropPress={() => setShow(false)} isVisible={show}>
          <View style={{ height: '50%', backgroundColor: '#8BA5FA', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
            <View style={{ alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', height: '15%', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
              <Text style={{ alignSelf: 'center', color: '#8BA5FA', textAlign: 'center', fontSize: 22 }}>Month/year</Text>
            </View>
            <View style={{ height: 100, justifyContent: 'center', alignItems: 'center', paddingTop: -150, flexDirection: 'row', flex: 1, backgroundColor: 'white' }}>
              <SmoothPicker
                startMargin={-10}
                selectOnPress
                keyExtractor={item => `${item}-list`}
                data={monthArray}
                onSelected={({ item, index }) => {
                  console.log(item)
                  setMonth(item)
                }}
                renderItem={({ item, index }) => (
                  <Item item={item} selected={month == item} />
                )}
              />
              <SmoothPicker
                startMargin={-10}
                data={Array(40).fill(moment().year()).map((i, idx) => i - idx).reverse()}
                selectOnPress
                keyExtractor={item => `${item}-list`}
                onSelected={({ item, index }) => {
                  console.log(item)
                  setYear(item)
                }}
                renderItem={({ item, index }) => (
                  <Item item={item} selected={year == item} />
                )}
              />
            </View>
            <View style={{ height: '15%' }}>
              <TouchableOpacity onPress={() => {
                formRef.current?.setFieldValue("date", moment(`${month}-${year}`, "MMM-YYYY"))
                setShow(false)
              }}>
                <View style={{ alignItems: 'center', backgroundColor: '#8BA5FA', justifyContent: 'center', height: '100%', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
                  <Text style={{ alignSelf: 'center', color: 'white', textAlign: 'center', fontSize: 22 }}>Done</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

export default FirstPassport;
