import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, Image, Modal, SafeAreaView, CheckBox, StatusBar } from 'react-native'
import { Icon } from 'native-base'
import { Formik } from 'formik';
import useAxios from 'axios-hooks'
import Images from '../../constants/image'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'
import ErrorLabel from '../../components/ErrorLabel'
import { dispatchAchivementFormState, ACHIVEMENT_STATE_ACTIONS, getAchivementFromState, useAchivementFromState } from '../../state/AchivementFormState'
import GlobalStyles from '../../constants/globalStyles';
import moment from 'moment';

const Experience = () => {
    const [currentFormState, setCurrentFormState] = useState();
    const [sendAttempNo, setSendAttempNo] = useState(0);

    const [createReq, doCreate] = useAxios({
        url: '/feedback',
        method: 'POST'
    }, { manual: true })

    useEffect(() => {
        setCurrentFormState(getAchivementFromState())
    }, [sendAttempNo])

    return (
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.achieveView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.backView}
                        onPress={() => NavigationService.navigate(Screens.Attach)}
                    >
                        <Icon type="Ionicons" name="ios-arrow-round-back" />
                        <Text style={styles.backTitle}>Back</Text>
                    </TouchableOpacity>

                </View>
                <Text style={styles.desTitle}>Have you been working with someone on this? Would you like a feedback from your manager, a client, a colleague?</Text>
                <Formik
                    initialValues={{ collegueName: '', colleguePhonenumber: '', collegueRole: '' }}
                    validate={(values) => {
                        const errors = {}
                        if (!values.collegueName) errors.collegueName = "Required"
                        if (!values.colleguePhonenumber) errors.colleguePhonenumber = "Required"
                        if (!values.collegueRole) errors.collegueRole = "Required"

                        return errors
                    }}
                    onSubmit={values => {
                        dispatchAchivementFormState({ type: ACHIVEMENT_STATE_ACTIONS.STEP_FIVE, state: values })
                        setSendAttempNo(p => p + 1)
                        const jsonData = {
                            ...currentFormState,
                            month: moment(currentFormState.date).format("MM"),
                            year: moment(currentFormState.date).format("YYYY"),
                            ...values
                        }
                        const data = new FormData();

                        data.append('awardFile', {
                            uri: jsonData['file'].uri, 
                            name: jsonData['file'].fileName,
                            type: jsonData['file'].type, 
                        })

                        delete jsonData.file;
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
                            })
                        return
                        NavigationService.navigate(Screens.Home)
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            <View style={{ marginTop: 40 }}>
                                <View style={styles.textInputBackground}>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Full Name"
                                        autoCompleteType={'name'}
                                        onChangeText={handleChange('collegueName')}
                                        onBlur={handleBlur('collegueName')}
                                        value={values.collegueName}
                                    />
                                </View>
                                {errors.collegueName && touched.collegueName && <ErrorLabel text={errors.collegueName} />}
                                <View style={styles.textInputBackground}>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Email or Phone number"
                                        autoCompleteType={'name'}
                                        onChangeText={handleChange('colleguePhonenumber')}
                                        onBlur={handleBlur('colleguePhonenumber')}
                                        value={values.colleguePhonenumber}
                                    />
                                </View>
                                {errors.colleguePhonenumber && touched.colleguePhonenumber && <ErrorLabel text={errors.colleguePhonenumber} />}

                                <View style={styles.textInputBackground}>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Select who was this person to you?"
                                        autoCompleteType={'name'}
                                        onChangeText={handleChange('collegueRole')}
                                        onBlur={handleBlur('collegueRole')}
                                        value={values.collegueRole}
                                    />
                                </View>
                                {errors.collegueRole && touched.collegueRole && <ErrorLabel text={errors.collegueRole} />}


                            </View>
                            <View style={{ marginTop: 40 }}>

                                <View style={styles.tipView}>
                                    <Image source={Images.Lamp} style={{ position: 'absolute', top: -30, left: 0 }} />
                                    <Text style={{ color: "#99879D", fontSize: 16 }}>Tips</Text>
                                </View>
                                <Text style={styles.context}>It’s a good opportunity for you to take feedback and add credibility to your achievements. You can’t add achievements with no one to testify for it.</Text>
                            </View>
                            <View style={styles.buttonView}>
                                <TouchableOpacity
                                    disabled={createReq.loading}
                                    style={[styles.textInputBackground, { backgroundColor: '#8BA5FA' }, createReq.loading && GlobalStyles.disabledButton]}
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

export default Experience;