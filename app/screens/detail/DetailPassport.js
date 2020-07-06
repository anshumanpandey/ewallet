import React from 'react';

import { View, FlatList, TouchableOpacity, Text, Image, ScrollView } from 'react-native'
import { Icon } from 'native-base'
import styles from './styles';
import Images from '../../constants/image'
import { useGlobalState } from '../../state/GlobalState';



const DetailPassport = (props) => {
    const [achivement] = useGlobalState("currentAchivemenSelected")

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.certiView}>
                        <View>
                            <Text style={styles.certTitle}>{achivement.title}</Text>
                            <Text>{achivement.year}</Text>
                        </View>
                        <Image source={Images.Hat} />
                    </View>
                    <Text style={styles.description}>{achivement.description}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View>
                            <Text style={{ fontSize: 20, lineHeight: 26, color: '#120E21' }}>Additionnal</Text>
                            <View style={{ padding: 10, backgroundColor: '#FBEAFF', borderRadius: 4 }}>
                                <Text>{achivement.titleObteined}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, textAlign: 'right' }}>{achivement.valueObteined}</Text>
                            <Text>{achivement.resultObteined}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.feedback}>
                        <Text style={{ fontSize: 20 }}>2 feedback</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image source={Images.Avatar} style={{ width: 40, height: 40 }} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 20 }}>Manager at Criteo</Text>
                                <Text style={{ fontSize: 16 }}>Florian Guerin</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image source={Images.Avatar} style={{ width: 40, height: 40 }} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 20 }}>Manager at Criteo</Text>
                                <Text style={{ fontSize: 16 }}>Florian Guerin</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => props.onTabClick(4)}
                    >
                        <View style={styles.sideBack}>
                            <Image source={Images.Side} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default DetailPassport;
