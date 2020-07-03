import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import { Icon } from 'native-base'
import Images from '../constants/image'
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../navigation/NavigationService';
import Screens from '../constants/screens';
import { useGlobalState } from '../state/GlobalState';



const Header = (props) => {
    const [profile] = useGlobalState('profile')
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.profileView}>
                <Image source={Images.Avatar} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.title}>{profile?.firstName} {profile?.lastName}</Text>
                    <Text style={styles.jobTitle}>{profile?.companyTitle}</Text>
                    <Text style={styles.jobTitle}>{profile?.companyName}</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => props.onTabClick(5)}
            >
                {/* <Icon type='Entypo' name='home' style={{fontSize:25,color:'#8BA5FA'}}/>  */}
                <Image source={Images.Setting} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    profileView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        lineHeight: 33,
        fontFamily: 'RedHatDisplay-Bold'
    },
    jobTitle: {
        fontSize: 16,
        lineHeight: 19,
        color: '#99879D'
    }
})


export default Header;