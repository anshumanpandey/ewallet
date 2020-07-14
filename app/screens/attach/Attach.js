import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, StatusBar } from 'react-native'
import { Icon } from 'native-base'
import { Formik } from 'formik';
import useAxios from 'axios-hooks'
import Images from '../../constants/image'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'
import ErrorLabel from '../../components/ErrorLabel';
import { dispatchAchivementFormState, ACHIVEMENT_STATE_ACTIONS, getAchivementFromState } from '../../state/AchivementFormState'
import FilePickerManager from 'react-native-file-picker';
import moment from 'moment';
import GlobalStyles from '../../constants/globalStyles';
import * as Progress from 'react-native-progress';


const Attach = () => {
    const [currentFormState, setCurrentFormState] = useState();
    const [sendAttempNo, setSendAttempNo] = useState(0);

    const [createReq, doCreate] = useAxios({
        url: '/achivement',
        method: 'POST'
    }, { manual: true })

    useEffect(() => {
        setCurrentFormState(getAchivementFromState())
    }, [])

    return (
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.achieveView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.backView}
                        onPress={() => NavigationService.navigate(Screens.Outcome)}
                    >
                        <Icon type="Ionicons" name="ios-arrow-round-back" />
                        <Text style={styles.backTitle}>Back</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 12, lineHeight: 14, color: '#9F8EA3' }}>Passer</Text>
                </View>
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
                <Text style={styles.desTitle}>Did you receive a diploma, accreditation or any proof of any form?</Text>
                <Formik
                    initialValues={{ file: '' }}
                    validate={(values) => {
                        const errors = {}
                        if (!values.file) errors.file = "Required"

                        return errors
                    }}
                    onSubmit={values => {
                        dispatchAchivementFormState({ type: ACHIVEMENT_STATE_ACTIONS.STEP_FOUR, state: values })
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
                                NavigationService.navigate(Screens.Congrats)
                            })
                    }}
                >
                    {({ setFieldValue, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            <View style={{ marginTop: 40 }}>
                                <TouchableOpacity onPress={() => {
                                    FilePickerManager.showFilePicker(null, (response) => {
                                        console.log('Response = ', response);

                                        if (response.didCancel) {
                                            console.log('User cancelled file picker');
                                        }
                                        else if (response.error) {
                                            console.log('FilePickerManager Error: ', response.error);
                                        }
                                        else {
                                            setFieldValue('file', response)
                                        }
                                    })
                                }}>
                                    <View style={styles.textInputBackground}>
                                        <TextInput
                                            editable={false}
                                            style={styles.textInput}
                                            placeholder="Attach"
                                            value={values.file?.fileName}
                                            autoCompleteType={'name'}
                                        />
                                    </View>
                                </TouchableOpacity>
                                {errors.file && touched.file && <ErrorLabel text={errors.file} />}
                                {values.file.uri && <Image style={{ width: 200, height: 200, marginLeft: 'auto', marginRight: 'auto', marginTop: '3%' }} source={{ uri: values.file.uri }} />}


                            </View>
                            <View style={{ marginTop: 30 }}>

                                <View style={styles.tipView}>
                                    <Image source={Images.Lamp} style={{ position: 'absolute', top: -30, left: 0 }} />
                                    <Text style={{ color: "#99879D", fontSize: 16 }}>Tips</Text>
                                </View>
                                <Text style={styles.context}>It applies to accreditations, online courses, awards...</Text>
                            </View>
                            <View style={styles.buttonView}>
                                <TouchableOpacity
                                    style={[styles.textInputBackground, { backgroundColor: '#8BA5FA' }, createReq.loading && GlobalStyles.disabledButton]}
                                    onPress={handleSubmit}
                                >
                                    <Text style={styles.buttonText}>
                                        Save
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

export default Attach;