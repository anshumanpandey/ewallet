import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, Image, Modal, SafeAreaView, CheckBox, StatusBar } from 'react-native'
import { Formik } from 'formik';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import Images from '../../constants/image'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'
import { useGlobalState } from '../../state/GlobalState'
import ErrorLabel from '../../components/ErrorLabel';
import { dispatchAchivementFormState, ACHIVEMENT_STATE_ACTIONS } from '../../state/AchivementFormState';

const Achievement = () => {
  const [profile] = useGlobalState('profile')
  const [show, setShow] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.achieveView}>
        <View style={styles.profileView}>
          <Image source={Images.Avatar} style={styles.profileImage} />
          <Text style={styles.profileTitle}>Welcome {profile.firstName}!</Text>
        </View>
        <Text style={styles.profileTitle}>Let’s start your onboarding by adding one achievement:</Text>
        <Formik
          initialValues={{ title: '', date: '', company: '' }}
          validate={(values) => {
            const errors = {}
            if (!values.title) errors.title = "Required"
            if (!values.company) errors.company = "Required"
            if (!values.date) errors.date = "Required"

            return errors
          }}
          onSubmit={values => {
            dispatchAchivementFormState({ type: ACHIVEMENT_STATE_ACTIONS.STEP_ONE, state: values })
            NavigationService.navigate(Screens.Description)
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, setFieldValue,values, errors, touched }) => (
            <>
              <View style={styles.textInputBackground}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Title"
                  autoCompleteType={'name'}
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                  value={values.title}
                />
              </View>
              {errors.title && touched.title && <ErrorLabel text={errors.title} />}

              <TouchableOpacity onPress={() => setShow(true)}>
                <View style={styles.textInputBackground}>
                  {show && <DateTimePicker
                    value={new Date()}
                    onChange={(e, d) => {
                      setShow(false)
                      setFieldValue('date',d)
                    }}
                  />}
                  <TextInput
                    editable={false}
                    style={styles.textInput}
                    placeholder="Month/year"
                    autoCompleteType={'name'}
                    value={values.date ? `${moment(values.date).format('MM')}/${moment(values.date).format('YYYY')}`: null}
                  />
                </View>
              </TouchableOpacity>
              {errors.date && touched.date && <ErrorLabel text={errors.date} />}

              <View style={styles.textInputBackground}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Company/organism"
                  autoCompleteType={'name'}
                  onChangeText={handleChange('company')}
                  onBlur={handleBlur('company')}
                  value={values.company}
                />
              </View>
              {errors.company && touched.company && <ErrorLabel text={errors.company} />}

              <View style={styles.buttonView}>
                <TouchableOpacity
                  style={[styles.textInputBackground, { backgroundColor: '#8BA5FA' }]}
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
    </ScrollView>
  );
}

export default Achievement;
