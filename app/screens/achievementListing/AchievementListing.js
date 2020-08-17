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
import { useGlobalState, dispatchGlobalState, GLOBAL_STATE_ACTIONS } from '../../state/GlobalState';

const AchievementListing = (props) => {
  const [achivement, setAchivement] = useGlobalState("currentAchivemenSelected")
  const [selectedSchievement, setSelectedSchievement] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [{ loading, data }, refetch] = useAxios({
    url: '/achivement',
  })

  const [unlinkReq, doUnlink] = useAxios({
    url: '/achivement/unlink',
    method: 'POST'
 }, { manual: true })

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
                  <TouchableOpacity disabled={true} style={[styles.detailView, { flexDirection: 'column', width: '70%' }]}>
                    <Text style={{ fontSize: 24 }}>{item.title}</Text>
                    <View>
                      <Text style={{ color: 'rgba(0,0,0,0.3)' }}>Associated to {item.Passports.length} Passports</Text>
                    </View>
                  </TouchableOpacity>
                  
                  <TouchableOpacity disabled={item.Passports.length == 0} onPress={() => {
                    setShowModal(true)
                    setSelectedSchievement(item)
                  }} style={[styles.detailView, { width: '15%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red',padding: 0 }]}>
                    <Text style={{ opacity: 1, color: 'white', fontSize: 40 }}>-</Text>
                  </TouchableOpacity>

                  <TouchableOpacity disabled={item.Passports.length == 0} onPress={() => {
                    dispatchGlobalState({ type: GLOBAL_STATE_ACTIONS.ACHIVEMEN_SELECTED, state: item })
                    props.onTabClick(3)
                  }} style={[styles.detailView, { width: '15%', justifyContent: 'center', alignItems: 'center', padding: 0 }]}>
                    <Text style={{ opacity: item.Passports.length == 0 ? 0.5: 1 }}>View</Text>
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
                  <Text style={{ alignSelf: 'center', color: '#8BA5FA', textAlign: 'center', fontSize: 22 }}>Passport(s) associated</Text>
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: "column", flex: 1, backgroundColor: 'white' }}>
                  <FlatList
                    contentContainerStyle={{ width: '100%' }}
                    style={{ width: '90%' }}
                    data={selectedSchievement.Passports}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                      return (
                        <View style={{ flexDirection: 'row'}}>
                          <View style={{ width: '90%', padding: '5%', backgroundColor: "rgba(119, 194, 241, 0.1)" }}>
                            <Text style={{ width: '90%', color: "#99879D" }}>{item.name}</Text>
                          </View>
                          <TouchableOpacity onPress={() => {
                            const data = { achivementId: selectedSchievement.id, passportId: item.id }
                            doUnlink({ data })
                            .then(() => refetch())
                          }} style={{ backgroundColor: '#FF0F0F', width: '10%', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{ color: 'white', fontSize: 18, borderRadius: 5}}>-</Text>
                          </TouchableOpacity>
                        </View>
                      );
                    }}
                  />
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