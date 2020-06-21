import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({

     card:{
         
          width:'100%',
          padding:15,
          backgroundColor:'#fff',
          borderColor:'black',
          borderWidth:1,
          borderRadius:5
     },
    certiView:{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          flexDirection:'row'
    },
     certTitle:{
        fontFamily:'RedHatDisplay-Bold',
        fontSize:20,
        lineHeight:26,
         maxWidth:200,
        color:'#120E21'
    },
    description:{
        fontSize:16,
        color:'#99879D',
        lineHeight:32
    },
    detailView:{
        width:'100%',
        padding:15,
        backgroundColor:'#FBEAFF',
        borderRadius:4,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    detailTitle:{
        color:'#120E21',
        fontSize:12,
        lineHeight:32
    },
    addCardView:{
        width:'100%',
        padding:20,
        backgroundColor:'#fff',
        borderColor:'black',
        borderWidth:1,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})

export default styles;