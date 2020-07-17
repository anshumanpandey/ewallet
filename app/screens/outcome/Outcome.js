import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, Image, Modal, SafeAreaView, CheckBox, StatusBar } from 'react-native'
import { Icon } from 'native-base'
import { Formik } from 'formik';
import Images from '../../constants/image'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'
import Screens from '../../constants/screens'
import { dispatchAchivementFormState,ACHIVEMENT_STATE_ACTIONS } from '../../state/AchivementFormState'
import ErrorLabel from '../../components/ErrorLabel';


const Outcome = () => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.achieveView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.backView}
                        onPress={() => NavigationService.navigate(Screens.Description)}
                    >
                        <Icon type="Ionicons" name="ios-arrow-round-back" />
                        <Text style={styles.backTitle}>Back</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 12, lineHeight: 14, color: '#9F8EA3' }}>Passer</Text>
                </View>
                <Text style={styles.desTitle}>Do you have any tangible outcome? It’s absolutely fine if you don’t!</Text>
                <Formik
                    initialValues={{ titleObteined: '', resultObteined: '', valueObteined: '', }}
                    validate={(values) => {
                        const errors = {}
                        if (!values.titleObteined) errors.titleObteined = "Required"
                        if (!values.resultObteined) errors.resultObteined = "Required"
                        if (!values.valueObteined) errors.valueObteined = "Required"

                        return errors
                    }}
                    onSubmit={values => {
                        dispatchAchivementFormState({ type: ACHIVEMENT_STATE_ACTIONS.STEP_THREE, state: values })
                        NavigationService.navigate(Screens.Attach)
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            <View style={{ marginTop: 40 }}>
                                <View style={styles.textInputBackground}>
                                    <TextInput
                                        placeholderTextColor="gray"
                                        style={styles.textInput}
                                        placeholder="Title"
                                        autoCompleteType={'name'}
                                        onChangeText={handleChange('titleObteined')}
                                        onBlur={handleBlur('titleObteined')}
                                        value={values.titleObteined}
                                    />
                                </View>
                                {errors.titleObteined && touched.titleObteined && <ErrorLabel text={errors.titleObteined} />}
                                <View style={styles.textInputBackground}>
                                    <TextInput
                                        placeholderTextColor="gray"
                                        style={styles.textInput}
                                        placeholder="Result"
                                        autoCompleteType={'name'}
                                        onChangeText={handleChange('resultObteined')}
                                        onBlur={handleBlur('resultObteined')}
                                        value={values.resultObteined}
                                    />
                                </View>
                                {errors.resultObteined && touched.resultObteined && <ErrorLabel text={errors.resultObteined} />}

                                <View style={styles.textInputBackground}>
                                    <TextInput
                                        placeholderTextColor="gray"
                                        style={styles.textInput}
                                        placeholder="Value"
                                        autoCompleteType={'name'}
                                        onChangeText={handleChange('valueObteined')}
                                        onBlur={handleBlur('valueObteined')}
                                        value={values.valueObteined}
                                    />
                                </View>
                                {errors.valueObteined && touched.valueObteined && <ErrorLabel text={errors.valueObteined} />}


                            </View>
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

export default Outcome;