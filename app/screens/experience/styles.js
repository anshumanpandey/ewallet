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
      backView:{
          flexDirection:'row',
          alignItems:'center'
      },
      backTitle:{
          fontFamily:'RedHatDisplay-Regular',
          fontWeight:'500',
          fontSize:18,
          lineHeight:24,
          color:'#99879D',
          marginLeft:10
      },
      desTitle:{
          fontFamily:'RedHatDisplay-Bold',
          fontSize:18,
          lineHeight:24,
          color:'#99879D',
          marginTop:20,
          textAlign:'center',
          marginHorizontal:20
      },
      desContainer:{
        marginTop:Dimension.px60,
        backgroundColor:'#EEF4FD',
        borderRadius:10,
        height:Dimension.px300,
        padding:15
     },
     title:{
         color:'#99879D',
         fontSize:16,
         lineHeight:19
     },
     tipView:{
         backgroundColor:'#FBEEFF',
         borderRadius:8,
         padding:10,
         maxWidth:117,
         justifyContent:'center',
         alignItems:'center'
     },
     context:{
        color: '#848484',
        fontSize:16,
        lineHeight:21
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
    bodyText: {
        textAlign: 'center',
        fontSize: 22
    }
   
      } )
      export default styles
