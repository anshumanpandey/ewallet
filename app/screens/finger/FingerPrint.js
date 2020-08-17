import React, { useState, useEffect, useRef } from 'react';

import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native'
import useAxios from 'axios-hooks'
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import Images from '../../constants/image'
import { dispatchGlobalState, GLOBAL_STATE_ACTIONS } from '../../state/GlobalState';
import Header from '../../components/Header';
import NavigationService from '../../navigation/NavigationService';
import Modal from 'react-native-modal';
import { Dropdown } from 'react-native-material-dropdown';

const Item = React.memo(({ opacity, selected, vertical, fontSize, item }) => {
   return (
      <View style={{ height: 40 }}>
         <Text style={{ color: selected ? '#8BA5FA' : 'black', borderColor: 'gray', paddingHorizontal: '15%', paddingVertical: '2%', textAlign: 'center', borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.2)', fontSize: 22 }}>{item.name}</Text>
      </View>
   );
});

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
                  {item.awardFilename && (
                     <View style={{ padding: 10, backgroundColor: '#FBEAFF', borderRadius: 6 }}>
                        <Text >Certification</Text>
                     </View>
                  )}
               </View>
            </View>
         </View>
      </TouchableOpacity>
   )
}

const FingerPrint = (props) => {
   const [show, setShow] = useState(false);
   const [tempPassport, setTempPassport] = useState(false);
   const [currentPassport, setCurrentPassport] = useState(null);

   const [{ loading, data }] = useAxios({
      url: '/passport',
   })

   let body = (
      <Text style={styles.bodyText}>Loading...</Text>
   );

   if (!loading && data && data.length == 0) {
      body = (
         <Text style={styles.bodyText}>No passport created</Text>
      );
   }

   if (!loading && data && data.length != 0) {
      body = (
         <View style={{ padding: 15, flexGrow: 1 }}>
            <FlatList
               ListEmptyComponent={
                  <Text style={{ textAlign: 'center', marginTop: '10%' }}>No achivements create for this passport</Text>
               }
               horizontal={false}
               data={currentPassport ? data.find(e => currentPassport?.id == e.id).Achivements : data[0].Achivements}
               style={{ paddingHorizontal: 15 }}
               numColumns={1}
               keyExtractor={item => item.id}
               renderItem={({ item }) =>
                  <ItemPassCard {...item} passportId={currentPassport || data[0].id} {...props} />
               }
            />
            <TouchableOpacity onPress={() => {
               setShow(true)
            }}>
               <View style={styles.detailView}>
                  <View>
                     <Text style={styles.detailTitle}>{(data.find(e => currentPassport?.id == e.id) || data[0]).name}</Text>
                     <Text style={styles.detailTitle}>Switch Passport</Text>
                  </View>
                  <Image source={Images.Personal} />
               </View>
            </TouchableOpacity>
         </View>
      );
   }


   return (
      <View style={{ backgroundColor: 'white', flexGrow: 1 }}>
         <Header
            hideIcons={true}
         />
         {body}
         <Modal onBackdropPress={() => setShow(false)} isVisible={show}>
            <View style={{ height: '30%', backgroundColor: '#8BA5FA', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
               <View style={{ alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', height: '25%', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                  <Text style={{ alignSelf: 'center', color: '#8BA5FA', textAlign: 'center', fontSize: 22 }}>Select</Text>
               </View>
               <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: -100, flexDirection: 'row', flex: 1, backgroundColor: 'white' }}>
                  <Dropdown
                     value={data ? (data?.find(e => currentPassport?.id == e.id) || data[0]).id : undefined}
                     containerStyle={{ width: '90%'}}
                     valueExtractor={(item) => item.id}
                     labelExtractor={(item) => item.name}
                     onChangeText={(o)=> {
                        setTempPassport(data.find(i => i.id == o))
                     }}
                     data={data}
                  />
               </View>
               <View style={{ height: '25%', zIndex: -100 }}>
                  <TouchableOpacity onPress={() => {
                     setCurrentPassport(tempPassport)
                     setShow(false)
                  }}>
                     <View style={{ alignItems: 'center', backgroundColor: '#8BA5FA', justifyContent: 'center', height: '100%', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
                        <Text style={{ alignSelf: 'center', color: 'white', textAlign: 'center', fontSize: 22 }}>Done</Text>
                     </View>
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
      </View>
   );
}

export default FingerPrint;
