import Dimension from '../../constants/dimensions.js'
import {StyleSheet, Dimensions} from 'react-native'

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white'
      },

      achieveView:{
        width:Dimension.pro100,
        flex:1,
        backgroundColor:'white',
        padding:20
      },
      profileView:{
          width:'100%',
          marginTop:Dimension.px30,
          alignItems:'center',
          justifyContent:'center'

      },
      profileImage:{
          width:110,
          height:110,
          resizeMode:'contain'
      },
      profileTitle:{
          fontFamily:'RedHatDisplay-Bold',
          fontSize:24,
          lineHeight:32,
          color:'#646464',
          marginTop:20,
          textAlign:'center'
      },
      textInputBackground:{
        height:Dimension.px50,
        backgroundColor: '#EEF4FD',
        borderRadius:8,
        justifyContent:'center',
        marginTop:Dimension.px20,  
        paddingHorizontal:10     
    },
    textInput:{
        height:Dimension.px50,
        justifyContent:'center',
        alignItems:'center',
        color:'black',
        borderRadius:Dimension.px25,       
        flexDirection:'row',       
      
     
        fontSize:13

    },
    buttonView:{
        width:'100%',
        marginTop:20
     },
     buttonText: {
        fontSize: 15,
        fontWeight:'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
       
      },
      } )
      export default styles
