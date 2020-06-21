import React from 'react';

import {View,FlatList,TouchableOpacity,Text,Image} from 'react-native'
import {Data} from './data'
import {Icon} from 'native-base'
import styles from './styles';
import Images from '../../constants/image'

const ItemPassCard = (item) =>{
    return(
       
            <View>
            <View style={styles.card}>
                <View style={styles.certiView}>
                     <Text style={styles.certTitle}>{item.title}</Text>
                   <Image source={Images.Hat}/>
                </View>
                <View style={[styles.certiView,{marginTop:10}]}>
                    <View>
                      <Text>{item.companyName}</Text>
                      <Text>{item.date}</Text>
                    </View>
                    <View style={{padding:10,backgroundColor:'#FBEAFF',borderRadius:6}}>
                       <Text >Certification</Text>
                    </View>
                </View>
             </View>
             <TouchableOpacity>
             <View style={styles.detailView}>
    
                 <Text style={styles.detailTitle}>Personalize your Passport</Text>
                 <Image source={Images.Personal}/>
             </View>
             </TouchableOpacity>
            </View>
           
       
    )
}

const FingerPrint =()=> {

  return (
     <View>
        <FlatList
         horizontal={false}
         data={Data}
         style={{paddingHorizontal:15,height:'100%'}}
         numColumns={1}
         keyExtractor={item=>item.id}
         renderItem={({item})=>
          <ItemPassCard {...item}/>
         }
        />
     </View>
  );
}

export default FingerPrint;
