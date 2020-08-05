import React, { useState, useEffect } from 'react';

import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native'
import useAxios from 'axios-hooks'
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import Images from '../../constants/image'
import { dispatchGlobalState, GLOBAL_STATE_ACTIONS } from '../../state/GlobalState';
import Header from '../../components/Header';
import NavigationService from '../../navigation/NavigationService';

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
         </View>
      </TouchableOpacity>
   )
}

const FingerPrint = (props) => {

   const [currentPassport, setCurrentPassport] = useState(null);

   const [{ loading, data }] = useAxios({
      url: '/passport',
   })

   let body = (
      <Text style={styles.bodyText}>Loading...</Text>
   );

   if (!loading && data.length == 0) {
      body = (
         <Text style={styles.bodyText}>No passport created</Text>
      );
   }

   if (!loading && data.length != 0) {
      body = (
         <View>
            <DropDownPicker
               items={data.length ? data.map(i => ({ label: i.name, value: i.id })) : []}
               defaultValue={data[0].id}
               containerStyle={{ height: Dimension.px50, borderRadius: 8, marginTop: Dimension.px20, width: '90%', marginLeft: 'auto', marginRight: 'auto' }}
               style={{ backgroundColor: '#EEF4FD', borderWidth: 0 }}
               itemStyle={{ justifyContent: 'flex-start' }}
               dropDownStyle={{ backgroundColor: '#fafafa' }}
               placeholderStyle={{ color: 'gray' }}
               onChangeItem={item => setCurrentPassport(item.value)}
            />
            <FlatList
               ListEmptyComponent={
                  <Text style={{ textAlign: 'center', marginTop: '10%' }}>No achivements create for this passport</Text>
               }
               horizontal={false}
               data={currentPassport ? data.find(e => currentPassport == e.id).Achivements : data[0].Achivements}
               style={{ paddingHorizontal: 15, height: '100%' }}
               numColumns={1}
               keyExtractor={item => item.id}
               renderItem={({ item }) =>
                  <ItemPassCard {...item } passportId={currentPassport || data[0].id} {...props} />
               }
            />
         </View>
      );
   }


   return (
      <>
         <Header
            hideIcons={true}
            customButton={() => {
               return (
                  <>
                     <View>
                        <TouchableOpacity
                           style={[styles.textInputBackground, { backgroundColor: '#8BA5FA' } ]}
                           onPress={() => NavigationService.navigate("PassportListing")}
                        >
                           <Text style={styles.buttonText}>Passports</Text>
                        </TouchableOpacity>
                     </View>
                  </>
               );
            }}
         />
         {body}
      </>
   );
}

export default FingerPrint;
