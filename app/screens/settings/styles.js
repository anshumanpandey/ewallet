import Dimension from '../../constants/dimensions.js'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1F1F5'
    },
    loginInfoArea: {
        paddingTop: Dimension.px15,
        padding: Dimension.px20,

    },
    buttonView: {
        width: '100%',
        marginTop: '50%'
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
export default styles
