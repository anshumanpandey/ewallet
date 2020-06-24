import React from 'react';
import {View,FlatList,TouchableOpacity,Text,Image} from 'react-native'

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
                <Image source={item.iconType} style={{width:40,height:40}}/>
                <Text style={{textAlign:'center',marginTop:15,paddingHorizontal:30,fontSize:12}}>{item.title}</Text>
             </View>
           </View>
         </TouchableOpacity>
     )
}

const Profile =(props)=> {
  return (
    <View style={styles.container}>
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

