import React from 'react';

import {View,FlatList,TouchableOpacity,Text,Image} from 'react-native'
import {Data} from './data'
import {Icon} from 'native-base'
import styles from './styles';
import Images from '../../constants/image'
import NavigationService from '../../navigation/NavigationService';
import Screens from '../../constants/screens';


const Passport =(props)=> {

  return (
     <View>
        <FlatList
         horizontal={false}
         data={Data}
         style={{paddingHorizontal:15,height:'100%'}}
         numColumns={1}
         keyExtractor={item=>item.id}
         renderItem={({item})=>
         <TouchableOpacity
          onPress={()=>props.onTabClick(3)}
         >
            <View>
            <View style={styles.card}>
                <View style={styles.certiView}>
                    <View>
                     <Text style={styles.certTitle}>{item.title}</Text>
                      <Text>{item.date}</Text>
                    </View>
                   <Image source={Images.Hat}/>
                </View>
                <Text style={styles.description}>{item.description}</Text>
             </View>
             <View style={styles.detailView}>
                 <Icon name="" type="" />
                 <Text style={styles.detailTitle}>See details</Text>
                 <Icon name="md-arrow-dropdown" type="Ionicons" style={{color:'#99879D'}}/>
             </View>
            </View>
           
        </TouchableOpacity>
         }
         ListFooterComponent={
         <TouchableOpacity
          onPress={()=>NavigationService.navigate(Screens.Achievement)}
         >
            <View style={styles.addCardView}>
                <Text style={{fontSize:20,lineHeight:26,width:200}}>Add a new achievement</Text>
                <Icon name='plus' type='Entypo' style={{color:'#99879D'}}/>
            </View>
         </TouchableOpacity>
        
         }
        />
     </View>
  );
}

export default Passport;
