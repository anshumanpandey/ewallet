import React, { useState, useEffect } from 'react';

import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native'
import useAxios from 'axios-hooks'
import DropDownPicker from 'react-native-dropdown-picker';
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

const PassportDetails = (props) => {
   const [achievementToAttach, setAchievementToAttach] = useState(null);
   const [show, setShow] = useState(false);
   const [currentPassport, setCurrentPassport] = useState(null);

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
               contentContainerStyle={{ marginTop: '5%'}}
               ListEmptyComponent={
                  <Text style={{ textAlign: 'center', marginTop: '10%' }}>No achivements create for this passport</Text>
               }
               horizontal={false}
               data={currentPassport ? data.find(e => currentPassport == e.id).Achivements : data[0].Achivements}
               numColumns={1}
               keyExtractor={item => item.id}
               renderItem={({ item }) =>
                  <ItemPassCard {...item} passportId={currentPassport || data[0].id} {...props} />
               }
            />
            <TouchableOpacity style={{ marginTop: 'auto'}} onPress={() => {
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
                  <DropDownPicker
                     items={achivementReq.data && achivementReq.data.length !== 0 ? achivementReq.data.map(i => ({ label: i.title, value: i.id, ...i })) : []}
                     containerStyle={{ height: Dimension.px50, borderRadius: 8, marginTop: Dimension.px20, width: '90%', marginLeft: 'auto', marginRight: 'auto' }}
                     style={{ backgroundColor: '#EEF4FD', borderWidth: 0 }}
                     itemStyle={{ justifyContent: 'flex-start' }}
                     dropDownStyle={{ backgroundColor: '#fafafa' }}
                     placeholderStyle={{ color: 'gray' }}
                     onChangeItem={item => setAchievementToAttach(item)}
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
