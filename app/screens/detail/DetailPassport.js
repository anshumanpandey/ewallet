import React, { useState } from 'react';

import { View, FlatList, TouchableOpacity, Text, Image, ScrollView } from 'react-native'
import { Icon } from 'native-base'
import styles from './styles';
import Images from '../../constants/image'
import { useGlobalState } from '../../state/GlobalState';
import NavigationService from '../../navigation/NavigationService';
import ImageView from "react-native-image-viewing";

const DetailPassport = (props) => {
    const [achivement] = useGlobalState("currentAchivemenSelected")
    const [visible, setIsVisible] = useState(false);

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: '40%' }}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.certiView}>
                        <View>
                            <Text style={styles.certTitle}>{achivement.title}</Text>
                            <Text>{achivement.company}</Text>
                            <Text>{achivement.month}/{achivement.year}</Text>
                        </View>
                        <Image source={Images.Hat} />
                    </View>
                    <Text style={styles.description}>{achivement.description}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View>
                            <Text style={{ fontSize: 20, lineHeight: 26, color: '#120E21' }}>Additional</Text>
                            {achivement.awardFilename && (
                                <TouchableOpacity onPress={() => setIsVisible(true)}>
                                    <Text style={{ padding: 10, backgroundColor: '#FBEAFF', borderRadius: 6 }}>Certification</Text>
                                </TouchableOpacity>
                            )}
                            <ImageView
                                images={[{ uri: achivement.awardFilename }]}
                                imageIndex={0}
                                visible={visible}
                                onRequestClose={() => setIsVisible(false)}
                            />
                        </View>
                        <View>
                            <Text style={{ textAlign: 'right' }}>{achivement.resultObteined}{achivement.valueObteined}</Text>
                            {achivement.titleObteined !== "" && <Text>{achivement.titleObteined}</Text>}
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => NavigationService.navigate("Achievement", { passportId: achivement.PassportId })} style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(0,0,0,0.5)', padding: 15, borderRadius: 5, marginTop: '5%' }}>
                    <Text style={{ fontSize: 24, width: '60%' }}>Add new Achievement</Text>
                    <Icon style={{ fontSize: 40 }} type="AntDesign" name="plus" />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', display: 'flex' }}>
                    {achivement.Feedbacks.length == 0 && (
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '30%', width: '100%' }}>
                            <TouchableOpacity
                                style={[{ height: Dimension.px50, backgroundColor: '#EEF4FD', borderRadius: 8, justifyContent: 'center', marginTop: Dimension.px20, paddingHorizontal: 10, backgroundColor: '#8BA5FA', width: '50%' }]}
                                onPress={() => NavigationService.navigate("Experience")}
                            >
                                <Text style={[styles.memberText, { color: 'white', textAlign: 'center' }]}>Ask for a recommendation</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    {achivement.Feedbacks.length != 0 && (
                        <>
                            <View style={[styles.feedback, achivement.Feedbacks.length == 0 && styles.emptyFeedback]}>
                                <Text style={{ fontSize: 20 }}>{achivement.Feedbacks.length} feedback</Text>
                                {achivement.Feedbacks.length !== 0 && achivement.Feedbacks.some(i => i.skillsWithExperience.length !== 0) && (
                                    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                        {(achivement.Feedbacks
                                            .reduce((skillsArr, next) => {
                                                next.skillsWithExperience.forEach(s => {
                                                    const found = skillsArr.find(i => i.skill == s)

                                                    if (found) {
                                                        skillsArr = [
                                                            ...skillsArr.filter(i => i.skill != found.skill),
                                                            { ...found, amount: found.amount + 1 }
                                                        ]

                                                    } else {
                                                        skillsArr.push({ skill: s, amount: 1 })
                                                    }
                                                })

                                                return skillsArr
                                            }, [])
                                            .map(f => {
                                                return (
                                                    <>
                                                        <View style={{ marginRight: '1%', padding: '1%', marginTop: 10, borderWidth: 1, borderColor: '#99879D', borderRadius: 4 }}>
                                                            <Text style={{ fontSize: 13, color: '#3DC35B' }}>{f.skill}</Text>
                                                        </View>
                                                        <View style={{ padding: '1%', marginTop: 10, borderWidth: 1, borderColor: '#99879D', borderRadius: 4 }}>
                                                            <Text style={{ fontSize: 13, color: '#3DC35B' }}>{f.amount}</Text>
                                                        </View>
                                                    </>
                                                );
                                            }))}
                                    </View>
                                )}
                                {achivement.Feedbacks.length !== 0 && achivement.Feedbacks.some(i => i.skillsWithImproving.length !== 0) && (
                                    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                        {(achivement.Feedbacks
                                            .reduce((skillsArr, next) => {
                                                next.skillsWithImproving.forEach(s => {
                                                    const found = skillsArr.find(i => i.skill == s)

                                                    if (found) {
                                                        skillsArr = [
                                                            ...skillsArr.filter(i => i.skill != found.skill),
                                                            { ...found, amount: found.amount + 1 }
                                                        ]
                                                    } else {
                                                        skillsArr.push({ skill: s, amount: 1 })
                                                    }
                                                })
                                                return skillsArr
                                            }, [])
                                            .map(f => {
                                                return (
                                                    <>
                                                        <View style={{ marginRight: '1%', padding: '1%', marginTop: 10, borderWidth: 1, borderColor: '#99879D', borderRadius: 4 }}>
                                                            <Text style={{ fontSize: 13, color: '#83A0F4' }}>{f.skill}</Text>
                                                        </View>
                                                        <View style={{ padding: '1%', marginTop: 10, borderWidth: 1, borderColor: '#99879D', borderRadius: 4 }}>
                                                            <Text style={{ fontSize: 13, color: '#83A0F4' }}>{f.amount}</Text>
                                                        </View>
                                                    </>
                                                );
                                            }))}
                                    </View>
                                )}
                                {achivement.Feedbacks.length !== 0 && (achivement.Feedbacks.map(f => {
                                    return (
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <Image source={Images.Avatar} style={{ width: 40, height: 40 }} />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={{ fontSize: 20 }}>{f.collegueName}</Text>
                                                <Text style={{ fontSize: 16 }}>{achivement.companyName}</Text>
                                            </View>
                                        </View>
                                    );
                                }))}
                            </View>

                        </>
                    )}
                    {achivement.Feedbacks.length !== 0 && (
                        <TouchableOpacity
                            onPress={() => props.onTabClick(4)}
                        >
                            <View style={styles.sideBack}>
                                <Image source={Images.Side} />
                            </View>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

export default DetailPassport;
