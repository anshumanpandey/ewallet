import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({

    card: {

        width: '100%',
        padding: 15,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    },
    certiView: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    certTitle: {
        fontFamily: 'RedHatDisplay-Bold',
        fontSize: 20,
        lineHeight: 26,
        maxWidth: 200,
        color: '#120E21'
    },
    description: {
        fontSize: 16,
        color: '#99879D',
        lineHeight: 32
    },
    detailView: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    },
    detailTitle: {
        color: '#99879D',
        fontSize: 20,
        lineHeight: 26,
        maxWidth: 200
    },
    addCardView: {
        width: '100%',
        padding: 20,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bodyText: {
        textAlign: 'center',
        fontSize: 22
    },
    linearGradient: {
        height: Dimension.px50,
        borderRadius: Dimension.px25,
        marginTop: Dimension.px20,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 120
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',

    },
    textInputBackground: {
        height: Dimension.px50,
        backgroundColor: '#EEF4FD',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: Dimension.px20,
        paddingHorizontal: 10
    },
})

export default styles;