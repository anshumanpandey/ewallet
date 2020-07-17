import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, StatusBar, Item, Picker } from 'react-native'
import { Icon } from 'native-base'
import { Formik } from 'formik';
import useAxios from 'axios-hooks'
import Images from '../../constants/image'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'
import ErrorLabel from '../../components/ErrorLabel'
import { dispatchAchivementFormState, ACHIVEMENT_STATE_ACTIONS, getAchivementFromState } from '../../state/AchivementFormState'
import GlobalStyles from '../../constants/globalStyles';
import moment from 'moment';
import * as Progress from 'react-native-progress';
import DropDownPicker from 'react-native-dropdown-picker';
import Dimension from '../../constants/dimensions.js'

const Experience = () => {
    const [currentFormState, setCurrentFormState] = useState();
    const [sendAttempNo, setSendAttempNo] = useState(0);

    const [createReq, doCreate] = useAxios({
        url: '/feedback/ask',
        method: 'POST'
    }, { manual: true })

    const [achivementReq] = useAxios({
        url: '/achivement',
    })

    useEffect(() => {
        setCurrentFormState(getAchivementFromState())
    }, [sendAttempNo])

    let body = (
        <Text style={styles.bodyText}>Loading...</Text>
    );

    if (!achivementReq.loading && achivementReq.data.length == 0) {
        body = (
            <Text style={styles.bodyText}>No achievements created</Text>
        );
    }

    if (!achivementReq.loading && achivementReq.data.length != 0) {
        body = (
            <>
                <Text style={styles.desTitle}>Have you been working with someone on this? Would you like a feedback from your manager, a client, a colleague?</Text>
                <Formik
                    initialValues={{ collegueName: '', colleguePhonenumber: '', collegueRole: '', achivementId: null }}
                    validate={(values) => {
                        const errors = {}
                        if (!values.achivementId) errors.achivementId = "Required"
                        if (!values.collegueName) errors.collegueName = "Required"
                        if (!values.colleguePhonenumber) errors.colleguePhonenumber = "Required"
                        if (!values.collegueRole) errors.collegueRole = "Required"

                        return errors
                    }}
                    onSubmit={values => {
                        const data = values

                        doCreate({
                            data,
                        })
                            .then((r) => {
                                console.log(r.data)
                                NavigationService.navigate(Screens.Home)
                            })
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
                        <>
                            <View style={{ marginTop: 40 }}>
                                <DropDownPicker
                                    items={achivementReq.data.length ? achivementReq.data.map(i => ({ label: i.title, value: i.id })): []}
                                    defaultValue={values.achivementId}
                                    containerStyle={{ height: Dimension.px50, borderRadius: 8, marginTop: Dimension.px20, }}
                                    style={{ backgroundColor: '#EEF4FD', borderWidth: 0 }}
                                    itemStyle={{ justifyContent: 'flex-start' }}
                                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                                    placeholderStyle={{ color: 'gray'}}
                                    onChangeItem={item => setFieldValue("achivementId", item.value)}
                                />

                                {errors.achivementId && touched.achivementId && <ErrorLabel text={errors.achivementId} />}

                                <View style={styles.textInputBackground}>
                                    <TextInput
                                        placeholderTextColor="gray"
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
                                        placeholderTextColor="gray"
                                        style={styles.textInput}
                                        placeholder="Email"
                                        autoCompleteType={'name'}
                                        onChangeText={handleChange('colleguePhonenumber')}
                                        onBlur={handleBlur('colleguePhonenumber')}
                                        value={values.colleguePhonenumber}
                                    />
                                </View>
                                {errors.colleguePhonenumber && touched.colleguePhonenumber && <ErrorLabel text={errors.colleguePhonenumber} />}

                                <DropDownPicker
                                    items={[
                                        { label: 'Colleague', value: 'Colleague' },
                                        { label: 'Client', value: 'Client' },
                                        { label: 'Manager', value: 'Manager' },
                                    ]}
                                    defaultValue={values.collegueRole}
                                    containerStyle={{ height: Dimension.px50, borderRadius: 8, marginTop: Dimension.px20, }}
                                    style={{ backgroundColor: '#EEF4FD', borderWidth: 0 }}
                                    itemStyle={{ justifyContent: 'flex-start' }}
                                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                                    placeholderStyle={{ color: 'gray'}}
                                    onChangeItem={item => setFieldValue("collegueRole", item.value)}
                                />

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
                                        Ask for recommendation
                            </Text>

                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                </Formik>
            </>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            {createReq.loading && (
                <View style={{ backgroundColor: 'rgba(255,255,255,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 }}>
                    <Progress.Circle
                        indeterminate={true}
                        textStyle={{ color: "#EEF4FD" }}
                        color={"#EEF4FD"}
                        borderWidth={4}
                        size={150}
                        indeterminate={true}
                    />
                </View>
            )}
            <View style={styles.achieveView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.backView}
                        onPress={() => NavigationService.navigate(Screens.Home)}
                    >
                        <Icon type="Ionicons" name="ios-arrow-round-back" />
                        <Text style={styles.backTitle}>Back</Text>
                    </TouchableOpacity>

                </View>
                {body}
            </View>
        </ScrollView>
    );
}

export default Experience;