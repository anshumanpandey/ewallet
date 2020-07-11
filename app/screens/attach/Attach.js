import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, Image, Modal, SafeAreaView, CheckBox, StatusBar } from 'react-native'
import { Icon } from 'native-base'
import { Formik } from 'formik';
import Images from '../../constants/image'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'
import ErrorLabel from '../../components/ErrorLabel';
import { dispatchAchivementFormState,ACHIVEMENT_STATE_ACTIONS } from '../../state/AchivementFormState'
import FilePickerManager from 'react-native-file-picker';

const Attach = () => {
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
                    <Text style={{ fontSize: 12, lineHeight: 14, color: '#9F8EA3' }}>Skip</Text>
                </View>
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
                        NavigationService.navigate(Screens.Experience)
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
                                {values.file.uri && <Image style={{ width: 200, height: 200, marginLeft: 'auto', marginRight: 'auto', marginTop: '3%'}} source={{ uri: values.file.uri }} />}


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

export default Attach;