import Dimension from '../../constants/dimensions.js'
import {StyleSheet, Dimensions} from 'react-native'

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white'
      },
    loginContainer:{
        width:Dimension.pro100,
        flex:1,
        backgroundColor:'white',
    },
    signupTitleView:{
      marginTop:Dimension.px35,
      justifyContent:'center',
      alignItems:'center'
    }, 
    signupTitle:{
        fontSize:27,
        lineHeight:36,
        fontWeight:'500',
        color:'#120E21',
        fontFamily:'RedHatDisplay-Bold'
    },
    logoArea:{
       justifyContent: 'center',
       alignItems:  'center',
       paddingTop:Dimension.px50
    },
    logoTitleArea:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:20
    },
    loginInfoArea:{
        paddingTop:Dimension.px15,
        padding:Dimension.px20,
       
    },
    logoTitle:{
        fontSize:13,
        color:'white',
        marginTop:Dimension.px12,
       
    },
    imageLogo:{
        width:Dimension.px80,
        height:Dimension.px80
    },
    imageSDLive:{
        width:120,
        resizeMode:'contain',
        height:30
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
    datePicker:{
        width:'80%',
        backgroundColor:'transparent',
        marginLeft:Dimension.px60,
        
    },

    buttonView:{
       width:'100%',
       marginTop:20
    },
    linearGradient: {
        height:Dimension.px50,
        borderRadius:Dimension.px25,
        marginTop:Dimension.px20,
        justifyContent:'center',
        alignItems:'center',
        minWidth:220
      },
      buttonText: {
        fontSize: 15,
        fontWeight:'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
       
      },
      iconBackground:{
        height:Dimension.px55,
        width:Dimension.px50* 197/177,
        justifyContent:'center',
        alignItems:'center'  ,
        position:'absolute',
        //top:-5      
    },
    icon:{
        width:15,
        height:15   ,
        marginRight:7,
        resizeMode:'contain'
    },
    emailIcon:{
        fontSize:15,
        color:"#7d47b7",
        marginRight:10,
        marginTop:5},
     memberText:{
            fontSize:13,
            color:'#120E21',
        },
        modalContainer:{
            width:Dimension.deviceWidth,
            height:Dimension.deviceHeight,
            backgroundColor:'#d7d7d8E6',
           
        },
  
        successContainer:{
            backgroundColor:'white',
            width:Dimension.deviceWidth,
            height:'100%',
            
        },
        successView:{
            width:'100%',
            marginTop:100,
            justifyContent:'center',
            alignItems:'center'
        },
        successIcon:{
            fontSize:150,
            color:'white'
        },
        regTitle:{
            color:'white',
            marginTop:15
        },
        linearGradient: {
            minWidth:220,
            height:Dimension.px50,
            borderRadius:Dimension.px25,
            marginTop:Dimension.px20,
            justifyContent:'center',
            alignItems:'center',
            width:200
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
