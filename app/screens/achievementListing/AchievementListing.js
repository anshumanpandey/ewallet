import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, TextInput } from 'react-native'
import { Icon, Spinner } from 'native-base'
import styles from './styles'
import Modal from 'react-native-modal';
import { Formik } from 'formik';
import ErrorLabel from '../../components/ErrorLabel'
import useAxios from 'axios-hooks'
import GlobalStyles from '../../constants/globalStyles'
import NavigationService from '../../navigation/NavigationService'
import { FlatList } from 'react-native-gesture-handler'
import Images from '../../constants/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer';

const AchievementListing = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [{ loading, data }, refetch] = useAxios({
    url: '/achivement',
  })

  useEffect(() => {
    refetch()
    const { navigation } = props;
    const focusListener = navigation?.addListener('didFocus', () => refetch());
    return () => focusListener?.remove()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Header onTabClick={props.onTabClick} />

      <View style={styles.loginContainer}>

        <View style={[styles.loginInfoArea, { flexGrow: 1 }]}>
          <View style={styles.backView}>
          </View>

          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: '15%' }}>No achivements created</Text>}
            data={data}
            keyExtractor={i => i.id}
            renderItem={({ item }) => {
              return (
                <View style={{ flexDirection: 'row' }}>
                  <View style={[styles.detailView, { flexDirection: 'column', width: '85%' }]}>
                    <Text style={{ fontSize: 24 }}>{item.title}</Text>
                    <View>
                      <Text style={{ color: 'rgba(0,0,0,0.3)' }}>Associated to {item.Passports.length} Passports</Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => {
                    props.onTabClick(13, { item })
                  }} style={[styles.detailView, { width: '15%', justifyContent: 'center', alignItems: 'center', padding: 0 }]}>
                    <Text>View</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />


        </View>
        <Formik
          initialValues={{ title: '' }}
          validate={(values) => {
            const errors = {}

            if (!values.title) errors.title = "Field required"

            return errors
          }}
          onSubmit={values => {
            createPassport({ data: { name: values.title } })
            .then(() => setShowModal(false))
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <Modal onBackdropPress={() => setShowModal(false)} isVisible={showModal}>
              <View style={{ height: '50%', backgroundColor: '#8BA5FA', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
                <View style={{ alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', height: '15%', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                  <Text style={{ alignSelf: 'center', color: '#8BA5FA', textAlign: 'center', fontSize: 22 }}>Title</Text>
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: "column", flex: 1, backgroundColor: 'white' }}>
                  <View style={[styles.textInputBackground, { width: '90%', backgroundColor: "rgba(119, 194, 241, 0.1)" }]}>
                    <TextInput
                      placeholderTextColor="gray"
                      style={styles.textInput}
                      placeholder="Title"
                      autoCompleteType={'name'}
                      onChangeText={handleChange('title')}
                      onBlur={handleBlur('title')}
                      value={values.title}
                    />
                  </View>
                  {errors.title && touched.title && <ErrorLabel text={errors.title} />}
                </View>
                <View style={{ height: '15%' }}>
                  <TouchableOpacity onPress={handleSubmit}>
                    <View style={{ alignItems: 'center', backgroundColor: '#8BA5FA', justifyContent: 'center', height: '100%', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
                      <Text style={{ alignSelf: 'center', color: 'white', textAlign: 'center', fontSize: 22 }}>Done</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  )
}

export default AchievementListing;