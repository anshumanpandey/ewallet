
import Dimension from '../../constants/dimensions'
import {StyleSheet} from 'react-native'


const styles =StyleSheet.create({
     
    card:{
        width: Dimension.deviceWidth / 2-30,
        height: 160,
        marginTop:10,
        marginHorizontal:5,
        borderRadius:6,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },

    container:{
        height:Dimension.deviceHeight,
        
    },
    buttonView: {
        width: '100%',
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