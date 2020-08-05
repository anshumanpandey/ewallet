import React from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, SafeAreaView} from 'react-native'
import { Icon } from 'native-base'
import styles from './styles'
import { useGlobalState, dispatchGlobalState, GLOBAL_STATE_ACTIONS } from '../../state/GlobalState'
import { Formik } from 'formik';
import ErrorLabel from '../../components/ErrorLabel'
import useAxios from 'axios-hooks'
import GlobalStyles from '../../constants/globalStyles'
import NavigationService from '../../navigation/NavigationService'

const CreatePassport = (props) => {
  const [createPassportReq, createPassport] = useAxios({
    url: '/passport/create',
    method: 'POST'
  }, { manual: true })

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>

    <ScrollView style={styles.container}>
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

          </View>
          <View style={styles.signupTitleView}>
            <Text style={styles.signupTitle}>{props.navigation.getParam("title", "Create Passport")}</Text>
          </View>
          <Formik
            initialValues={{ id: props.navigation.getParam("id", undefined), name: props.navigation.getParam("name", "")}}
            validate={(values) => {
              const errors = {}
              if (!values.name) errors.name = "Required"

              return errors
            }}
            onSubmit={values => {
              const data = values
              createPassport({ data })
              .then(() => {
                NavigationService.navigate("PassportListing")
              })
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <View style={styles.textInputBackground}>
                  <TextInput
                    placeholderTextColor="gray"
                    style={styles.textInput}
                    placeholder="Passport name"
                    autoCompleteType={'name'}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                </View>
                {errors.name && touched.name && <ErrorLabel text={errors.name} />}

                <View style={styles.buttonView}>
                  <TouchableOpacity
                    disabled={createPassportReq.loading}
                    style={[styles.textInputBackground, { backgroundColor: '#8BA5FA' }, createPassportReq.loading && GlobalStyles.disabledButton]}
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


      </View>
    </ScrollView>
    </SafeAreaView>
  )
}



export default CreatePassport;