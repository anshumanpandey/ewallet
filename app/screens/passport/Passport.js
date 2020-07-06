import React, { useEffect, useState } from 'react';

import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native'
import { Icon } from 'native-base'
import styles from './styles';
import Images from '../../constants/image'
import NavigationService from '../../navigation/NavigationService';
import Screens from '../../constants/screens';
import useAxios from 'axios-hooks'
import { dispatchGlobalState, GLOBAL_STATE_ACTIONS } from '../../state/GlobalState';


const Passport = (props) => {

   const [parsedData, setParsedData] = useState([]);

   const [{ loading, data }] = useAxios({
      url: '/achivement',
   })

   useEffect(() => {
      if (!Array.isArray(data)) return
      setParsedData(data.map(i => {
         return {
            id: i.id,
            date: i.year,
            ...i
         }
      }))
   }, [data]);

   let body = (
      <Text style={styles.bodyText}>Loading...</Text>
   );

   if (!loading && parsedData.length == 0) {
      body = (
         <Text style={styles.bodyText}>No achievements created</Text>
      );
   }

   if (!loading && parsedData.length != 0) {
      body = (
         <FlatList
            horizontal={false}
            data={parsedData}
            style={{ paddingHorizontal: 15, height: '100%' }}
            numColumns={1}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
               <TouchableOpacity
                  onPress={() => {
                     props.onTabClick(3)
                     dispatchGlobalState({ type: GLOBAL_STATE_ACTIONS.ACHIVEMEN_SELECTED, state: item })
                  }}
               >
                  <View>
                     <View style={styles.card}>
                        <View style={styles.certiView}>
                           <View>
                              <Text style={styles.certTitle}>{item.title}</Text>
                              <Text>{item.date}</Text>
                           </View>
                           <Image source={Images.Hat} />
                        </View>
                        <Text style={styles.description}>{item.description}</Text>
                     </View>
                     <View style={styles.detailView}>
                        <Icon name="" type="" />
                        <Text style={styles.detailTitle}>See details</Text>
                        <Icon name="md-arrow-dropdown" type="Ionicons" style={{ color: '#99879D' }} />
                     </View>
                  </View>

               </TouchableOpacity>
            }
            ListFooterComponent={
               <TouchableOpacity
                  onPress={() => NavigationService.navigate(Screens.Achievement)}
               >
                  <View style={styles.addCardView}>
                     <Text style={{ fontSize: 20, lineHeight: 26, width: 200 }}>Add a new achievement</Text>
                     <Icon name='plus' type='Entypo' style={{ color: '#99879D' }} />
                  </View>
               </TouchableOpacity>

            }
         />
      );
   }

   return (
      <View>
         {body}
      </View>
   );
}

export default Passport;
