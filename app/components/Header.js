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
    console.log(profile.profilePic)
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.profileView}>
                <TouchableOpacity onPress={() => NavigationService.navigate("ProfilePic")}>
                    <Image style={{ height: 60, width: 60, borderRadius: 60/2 }} source={{ uri: profile.profilePic }} />
                </TouchableOpacity>
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.title}>{profile?.firstName} {profile?.lastName}</Text>
                    <Text style={styles.jobTitle}>{profile?.companyTitle}</Text>
                    <Text style={styles.jobTitle}>{profile?.companyName}</Text>
                </View>
            </View>

            {props.hideIcons != true && (
                <View style={styles.menu}>
                    <TouchableOpacity
                        onPress={() => props.onTabClick(5)}
                    >
                        <Icon type='AntDesign' name='home' style={{ fontSize: 25, color: '#8BA5FA' }} />
                    </TouchableOpacity>
                </View>
            )}
            {props.customButton && props.customButton()}
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
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '20%',
        alignItems: 'center',
    }
})


export default Header;