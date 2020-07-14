import React from 'react';

import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { Data } from './data'
import Images from '../../constants/image'
import { useGlobalState } from '../../state/GlobalState';
import moment from 'moment'

const ItemFeedback = ({ item, onTabClick }) => {

  onGoBack = () => {
    onTabClick(3)
  }
  return (
    <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 6, marginTop: 10, width: '100%' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={Images.Avatar} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 20 }}>{item.career}</Text>
          <Text style={{ fontSize: 16 }}>{item.name}</Text>
          <Text style={{ fontSize: 12 }}>{item.date}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>

        <View style={{ width: '10%', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => onGoBack()}
          >
            <Image source={Images.Left} />
          </TouchableOpacity>

        </View>
        <View style={{ width: '90%'}}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 20, flexWrap: 'wrap' }}>
            {
              item.skillsWithExperience.map(skill => (
                <View style={{ padding: 5, borderRadius: 4, borderColor: 'black', borderWidth: 1, marginLeft: 5, marginBottom: '2%' }}>
                  <Text style={{ fontSize: 13, lineHeight: 16, color: '#3DC35B' }}>{skill}</Text>
                </View>
              ))
            }

          </View>
          <Text style={{ marginLeft: 5, marginTop: 20, fontSize: 12, maxWidth: 300 }}>{item.ownership}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 20, flexWrap: 'wrap' }}>
            {
              item.skillsWithImproving.map(skill => (
                <View style={{ padding: 5, borderRadius: 4, borderColor: 'black', borderWidth: 1, marginLeft: 5, marginBottom: '2%' }}>
                  <Text style={{ fontSize: 13, lineHeight: 16, color: '#83A0F4' }}>{skill}</Text>
                </View>
              ))
            }
          </View>
          <Text style={{ marginLeft: 5, marginTop: 20, fontSize: 12, maxWidth: 300 }}>{item.engagement}</Text>

        </View>
      </View>
    </View>
  )
}

const FullFeedback = (props) => {
  const [achivement] = useGlobalState("currentAchivemenSelected")

  return (
    <View>
      <FlatList
        contentContainerStyle={{ paddingBottom: '10%'}}
        horizontal={false}
        data={achivement.Feedbacks.map(i => {
          return {
            id: i.id,
            career: `${i.collegueRole} at ${achivement.companyName}`,
            name: i.fullname,
            skillsWithExperience: i.skillsWithExperience,
            skillsWithImproving: i.skillsWithImproving,
            date: moment(i.createdAt).year(),
            ownership: i.description,
            engagement: i.engagementDescription
          };
        })}
        style={{ padding: 15 }}
        numColumns={1}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <ItemFeedback
            item={item}
            onTabClick={props.onTabClick} />
        }
      />
    </View>
  );
}

export default FullFeedback;
