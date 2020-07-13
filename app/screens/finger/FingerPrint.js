import React, { useState, useEffect } from 'react';

import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native'
import useAxios from 'axios-hooks'
import { Data } from './data'
import styles from './styles';
import Images from '../../constants/image'
import { dispatchGlobalState, GLOBAL_STATE_ACTIONS } from '../../state/GlobalState';

const ItemPassCard = (item) => {
   return (
      <TouchableOpacity onPress={() => {
         dispatchGlobalState({ type: GLOBAL_STATE_ACTIONS.ACHIVEMEN_SELECTED, state: item })
         item.onTabClick(3)
      }}>
         <View>
            <View style={styles.card}>
               <View style={styles.certiView}>
                  <Text style={styles.certTitle}>{item.title}</Text>
                  <Image source={Images.Hat} />
               </View>
               <View style={[styles.certiView, { marginTop: 10 }]}>
                  <View>
                     <Text>{item.companyName}</Text>
                     <Text>{item.date}</Text>
                  </View>
                  <View style={{ padding: 10, backgroundColor: '#FBEAFF', borderRadius: 6 }}>
                     <Text >Certification</Text>
                  </View>
               </View>
            </View>
            <TouchableOpacity>
               <View style={styles.detailView}>

                  <Text style={styles.detailTitle}>Personalize your Passport</Text>
                  <Image source={Images.Personal} />
               </View>
            </TouchableOpacity>
         </View>
      </TouchableOpacity>
   )
}

const FingerPrint = (props) => {

   const [parsedData, setParsedData] = useState([]);

   const [{ loading, data }] = useAxios({
      url: '/achivement',
   })

   useEffect(() => {
      if (!Array.isArray(data)) return
      setParsedData(data.map(i => {
         console.log(i)
         return {
            id: i.id,
            date: i.year,
            companyName: i.company,
            ...i
         }
      }))
   }, [loading]);

   let body = (
      <Text style={styles.bodyText}>Loading...</Text>
   );

   if (!loading && data.length == 0) {
      body = (
         <Text style={styles.bodyText}>No achievements created</Text>
      );
   }

   if (!loading && parsedData.length != 0) {
      body = (
         <View>
            <FlatList
               horizontal={false}
               data={parsedData}
               style={{ paddingHorizontal: 15, height: '100%' }}
               numColumns={1}
               keyExtractor={item => item.id}
               renderItem={({ item }) =>
                  <ItemPassCard {...item} {...props}/>
               }
            />
         </View>
      );
   }


   return body;
}

export default FingerPrint;
