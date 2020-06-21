
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
  
})

export default styles;