import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, StatusBar } from 'react-native'
import { Icon } from 'native-base'
import { Formik } from 'formik';
import useAxios from 'axios-hooks'
import ImagePicker from 'react-native-image-picker';
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'
import ErrorLabel from '../../components/ErrorLabel';
import { dispatchAchivementFormState, ACHIVEMENT_STATE_ACTIONS, getAchivementFromState } from '../../state/AchivementFormState'
import GlobalStyles from '../../constants/globalStyles';
import * as Progress from 'react-native-progress';
import { dispatchGlobalState, GLOBAL_STATE_ACTIONS } from '../../state/GlobalState';

const ProfilePic = () => {
    const [currentFormState, setCurrentFormState] = useState();
    const [sendAttempNo, setSendAttempNo] = useState(0);

    const [createReq, doUploadPicture] = useAxios({
        url: '/uploadProfilePic',
        method: 'POST'
    }, { manual: true })

    const [getUserReq, getUser] = useAxios({
        url: '/getUser',
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
                <Text style={styles.desTitle}>Profile Picture</Text>
                <Formik
                    initialValues={{ file: '' }}
                    validate={( values ) => {
                        const errors = {}
                        if (!values.file) errors.file = 'Required'
                        return errors
                    }}
                    onSubmit={values => {
                        const data = new FormData();

                        data.append('awardFile', {
                            uri: values['file'].uri,
                            name: values['file'].fileName ? values['file'].fileName: new Date().toString(),
                            type: values['file'].type,
                        })

                        doUploadPicture({
                            data,
                            headers: {
                                "content-type": "multipart/form-data"
                            }
                        })
                            .then(() => getUser())
                            .then((r) => {
                                console.log(r.data)
                                dispatchGlobalState({ type: GLOBAL_STATE_ACTIONS.PROFILE, state: r.data })
                                NavigationService.navigate(Screens.Home)
                            })
                    }}
                >
                    {({ setFieldValue, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            <View style={{ marginTop: 40 }}>
                                <TouchableOpacity onPress={() => {
                                    const options = {
                                        title: "Select picture",
                                        chooseFromLibraryButtonTitle: 'Select from gallery',
                                        storageOptions: {
                                            skipBackup: true,
                                            path: 'images',
                                            cameraRoll: true,
                                            waitUntilSaved: true
                                        },
                                    };

                                    ImagePicker.showImagePicker(options, (file) => {

                                        if (file.didCancel) {
                                            console.log('User cancelled image picker');
                                        } else if (file.error) {
                                            console.log('ImagePicker Error: ', file.error);
                                        } else if (file.customButton) {
                                            console.log('User tapped custom button: ', file.customButton);
                                        } else {
                                            setFieldValue('file', file)
                                        }
                                    });
                                }}>
                                    <View style={styles.textInputBackground}>
                                        <Text style={{ color: values.date ? 'black' : 'gray' }}>{values.file ? values.file?.fileName : "Attach"}</Text>
                                    </View>
                                </TouchableOpacity>
                                {errors.file && touched.file && <ErrorLabel text={errors.file} />}
                                {values.file.uri && <Image style={{ width: 200, height: 200, marginLeft: 'auto', marginRight: 'auto', marginTop: '3%' }} source={{ uri: values.file.uri }} />}


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

export default ProfilePic;