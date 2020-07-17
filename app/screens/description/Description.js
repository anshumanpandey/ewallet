import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, Image, Modal, SafeAreaView, CheckBox, StatusBar } from 'react-native'
import { Icon } from 'native-base'
import { Formik } from 'formik';
import Images from '../../constants/image'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'
import ErrorLabel from '../../components/ErrorLabel'
import { dispatchAchivementFormState,ACHIVEMENT_STATE_ACTIONS } from '../../state/AchivementFormState'

const Description = () => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.achieveView}>
                <View style={styles.backView}>
                    <TouchableOpacity
                        style={styles.backView}
                        onPress={() => NavigationService.navigate(Screens.Achievement)}
                    >
                        <Icon type="Ionicons" name="ios-arrow-round-back" />
                        <Text style={styles.backTitle}>Back</Text>
                    </TouchableOpacity>

                </View>
                <Text style={styles.desTitle}>Describe shortly your achievement with 30 words (max):</Text>
                <Formik
                    initialValues={{ description: '', }}
                    validate={(values) => {
                        const errors = {}
                        if (!values.description) {
                            errors.description = "Required"
                        } else if (values.description.match(/[\w\d\’\'-]+/gi).length > 30) {
                            errors.description = "Description can only be of max of 30 word"
                        }

                        return errors
                    }}
                    onSubmit={values => {
                        dispatchAchivementFormState({ type: ACHIVEMENT_STATE_ACTIONS.STEP_TWO, state: values })
                        NavigationService.navigate(Screens.Outcome)
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            <View style={styles.desContainer}>
                                <TextInput
                                    placeholderTextColor="gray"
                                    style={{ width: '100%', height: 250, padding: 5 }}
                                    textAlignVertical="top"
                                    multiline={true}
                                    placeholder="Description"
                                    onChangeText={handleChange('description')}
                                    onBlur={handleBlur('description')}
                                    onFocus={handleBlur('description')}
                                    value={values.description}
                                />
                            </View>
                            {errors.description && touched.description && <ErrorLabel text={errors.description} />}
                            <View style={{ marginTop: 40 }}>

                                <View style={styles.tipView}>
                                    <Image source={Images.Lamp} style={{ position: 'absolute', top: -30, left: 0 }} />
                                    <Text style={{ color: "#99879D", fontSize: 16 }}>Tips</Text>
                                </View>
                                <Text style={styles.context}>Give some context, sum-up the challenge, how did you acommplish that, share your learnings, tell everyone the outcome...</Text>
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

export default Description;