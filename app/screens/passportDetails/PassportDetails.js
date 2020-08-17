import React, { useState, useEffect } from 'react';

import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native'
import useAxios from 'axios-hooks'
import { Dropdown } from 'react-native-material-dropdown';
import styles from './styles';
import Images from '../../constants/image'
import { dispatchGlobalState, GLOBAL_STATE_ACTIONS } from '../../state/GlobalState';
import Header from '../../components/Header';
import NavigationService from '../../navigation/NavigationService';
import { Icon } from 'native-base';
import Modal from 'react-native-modal';

const ItemPassCard = (item) => {
   return (
      <TouchableOpacity onPress={() => {
         dispatchGlobalState({ type: GLOBAL_STATE_ACTIONS.ACHIVEMEN_SELECTED, state: item })
         item.onTabClick(3)
      }}>
         <View>
            <View style={[styles.card, { flexDirection: 'row', justifyContent: 'space-between' }]}>
               <View style={{ padding: 15 }}>
                  <View style={styles.certiView}>
                     <Text style={styles.certTitle}>{item.title}</Text>
                  </View>
                  <View style={[styles.certiView, { marginTop: 10 }]}>
                     <View>
                        <Text>{item.companyName}</Text>
                        <Text>{item.date}</Text>
                     </View>
                  </View>
               </View>
               <TouchableOpacity onPress={() => {
                  item.onDelete(item)
               }} style={{ backgroundColor: 'red', padding: '4%' }}>
                  <Text style={{ fontSize: 40, color: 'white' }}>-</Text>
               </TouchableOpacity>
            </View>
         </View>
      </TouchableOpacity>
   )
}

const PassportDetails = (props) => {
   const [achievementToAttach, setAchievementToAttach] = useState(null);
   const [show, setShow] = useState(false);
   const [currentPassport, setCurrentPassport] = useState(props.item);

   const [{ loading, data }, fetchPassport] = useAxios({
      url: '/passport',
   })

   const [achivementReq] = useAxios({
      url: '/achivement',
   })

   const [linkReq, doLink] = useAxios({
      url: '/achivement/link',
      method: 'POST'
   }, { manual: true })

   const [unlinkReq, doUnlink] = useAxios({
      url: '/achivement/unlink',
      method: 'POST'
   }, { manual: true })

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
         <View style={{ padding: 15, flexGrow: 1 }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => props.onTabClick(12)}>
               <Icon style={{ fontSize: 14 }} type="AntDesign" name="arrowleft" />
               <Text>Back</Text>
            </TouchableOpacity>
            <View style={{ marginTop: '3%', borderColor: 'rgba(153, 135, 157, 0.24)', borderWidth: 1, backgroundColor: '#FFFFFF', borderRadius: 5 }}>
               <Text style={{ fontSize: 24, padding: '5%' }}>{props?.item?.name}</Text>
            </View>
            <FlatList
               refreshing={unlinkReq.loading}
               onRefresh={() => null}
               contentContainerStyle={{ marginTop: '5%' }}
               ListEmptyComponent={
                  <Text style={{ textAlign: 'center', marginTop: '10%' }}>No achivements create for this passport</Text>
               }
               horizontal={false}
               data={currentPassport ? data.find(e => props.item.id == e.id).Achivements : data[0].Achivements}
               numColumns={1}
               keyExtractor={item => item.id}
               renderItem={({ item }) =>
                  <ItemPassCard {...item} onDelete={(item) => {
                     const data = { achivementId: item.id, passportId: item.passportId.id }
                     doUnlink({ data })
                        .then(() => fetchPassport())
                  }} passportId={currentPassport || data[0].id} {...props} />
               }
            />
            <TouchableOpacity style={{ marginTop: 'auto' }} onPress={() => {
               setShow(true)
            }}>
               <View style={styles.detailView}>
                  <View>
                     <Text style={styles.detailTitle}>Link an Achievement</Text>
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
            <View style={{ height: '50%', backgroundColor: '#8BA5FA', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
               <View style={{ alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', height: '15%', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                  <Text style={{ alignSelf: 'center', color: '#8BA5FA', textAlign: 'center', fontSize: 22 }}>Select</Text>
               </View>
               <View style={{ height: 100, justifyContent: 'center', alignItems: 'center', paddingTop: -150, flexDirection: 'row', flex: 1, backgroundColor: 'white' }}>
                  <Dropdown
                     containerStyle={{ width: '90%' }}
                     valueExtractor={(item) => item.id}
                     labelExtractor={(item) => item.title}
                     onChangeText={(o) => {
                        setAchievementToAttach(achivementReq.data.find(i => i.id == o))
                     }}
                     data={achivementReq.data && achivementReq.data.length !== 0 ? achivementReq.data : []}
                  />
               </View>
               <View style={{ height: '15%' }}>
                  <TouchableOpacity disabled={linkReq.loading || !achievementToAttach} onPress={() => {
                     const data = { achivementId: achievementToAttach.id, passportId: props.item.id }
                     doLink({ data })
                        .then(() => {
                           fetchPassport()
                           setShow(false)
                        })
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

export default PassportDetails;
