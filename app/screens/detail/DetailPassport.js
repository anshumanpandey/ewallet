import React from 'react';

import {View,FlatList,TouchableOpacity,Text,Image} from 'react-native'
import {Icon} from 'native-base'
import styles from './styles';
import Images from '../../constants/image'
import { ScrollView } from 'react-native-gesture-handler';


const DetailPassport =(props)=> {

  return (
     <ScrollView style={{padding:20}}>
         <View style={styles.card}>
                <View style={styles.certiView}>
                    <View>
                     <Text style={styles.certTitle}>Certified PMP Project Manager</Text>
                      <Text>2020</Text>
                    </View>
                   <Image source={Images.Hat}/>
                </View>
                <Text style={styles.description}>The PMP is the gold standard of project management certification. Recognized by organizations worldwide. Meet the demands of projects and employers across the globe.</Text>
               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                   <View>
                       <Text style={{fontSize:20,lineHeight:26,color:'#120E21'}}>Additionnal</Text>
                       <View style={{padding:10,backgroundColor:'#FBEAFF',borderRadius:4}}>
                           <Text>Certification</Text>
                       </View>
                   </View>
                   <View>
                       <Text style={{fontSize:20,textAlign:'right'}}>+10%</Text>
                       <Text>Revenue Increase Q3 vs Q4</Text>
                   </View>
               </View>
             </View>

             <View style={{flexDirection:'row'}}>
             <View style={styles.feedback}>
                <Text style={{fontSize:20}}>2feedback</Text>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Image source={Images.Avatar} style={{width:40,height:40}}/>
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:20}}>Manager at Criteo</Text>
                        <Text style={{fontSize:16}}>Florian Guerin</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Image source={Images.Avatar} style={{width:40,height:40}}/>
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:20}}>Manager at Criteo</Text>
                        <Text style={{fontSize:16}}>Florian Guerin</Text>
                    </View>
                </View>
             </View>
             <View style={styles.sideBack}>
                 <TouchableOpacity
                  onPress={()=>props.onTabClick(4)}
                 >
                   <Image source={Images.Side}/>
                 </TouchableOpacity>
                
             </View>
             </View>
            
     </ScrollView>
  );
}

export default DetailPassport;
