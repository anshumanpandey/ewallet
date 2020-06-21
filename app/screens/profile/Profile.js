import React from 'react';
import {View,FlatList,TouchableOpacity,Text} from 'react-native'

import {Icon} from 'native-base'
import {Data} from './data'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService';
import Share from 'react-native-share';

const ItemCard = ({item,onTabClick}) =>{

    onSwitch = (path) =>{
      
      if(path === 'FingerPrint'){
        onTabClick(1)
      }
      else if(path === 'EditProfile'){
        NavigationService.navigate(path)
      }
      else if(path === 'Achievement'){
        NavigationService.navigate(path)

      }
      else if(path ==='Feedback'){
        NavigationService.navigate(path)

      }
      else if (path === 'Share'){
        let shareOptions = {
          title: "eWallet",
          message: "Hello",
          url: "http://facebook.github.io/react-native/",
          subject: "Share Link" //  for email
        };
        Share.open(shareOptions).catch((err) => { err && console.log(err); })
      }
      else{
        let shareOptions = {
          title: "eWallet",
          message: "Hello ",
          url: "http://facebook.github.io/react-native/",
          subject: "Share Link" //  for email
        };
        Share.open(shareOptions).catch((err) => { err && console.log(err); })
      }

    }
     return(
         <TouchableOpacity
          onPress={
            ()=>onSwitch(item.path)
          }
         >
           <View style={styles.card}>
             <View style={{alignItems:'center',justifyContent:'center'}}>
               <View style={{backgroundColor:'#999CF9',width:40,height:40,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                  <Icon type={item.iconType} name={item.iconName} style={{fontSize:20,color:'white'}}/>
               </View>
                <Text style={{textAlign:'center',maxWidth:110,marginTop:20}}>{item.title}</Text>
             </View>
           </View>
         </TouchableOpacity>
     )
}

const Profile =(props)=> {
  return (
    <View style={{width:'100%',height:'100%'}}>
     <FlatList
       horizontal={false}
       data ={Data}
       style={{paddingHorizontal:20}}
       numColumns={2}
       keyExtractor={item=>item.id}
       renderItem={({item})=>
         <ItemCard 
         item={item}
         onTabClick ={props.onTabClick}/>
        }
       />
    </View>
  );
}

export default Profile;

