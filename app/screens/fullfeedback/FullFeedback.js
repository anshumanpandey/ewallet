import React from 'react';

import {View,Text,FlatList,Image,TouchableOpacity} from 'react-native'
import {Data} from './data'
import Images from '../../constants/image'
import NavigationService from '../../navigation/NavigationService';


const ItemFeedback = ({item,onTabClick})=>{
  
    onGoBack = () =>{
        onTabClick(3)
    }
    return(
        <View style={{backgroundColor:'#fff',padding:10,borderRadius:6,marginTop:10,width:'100%'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={Images.Avatar}/>
                <View style={{marginLeft:10}}>
                     <Text style={{fontSize:20}}>{item.career}</Text>
                     <Text style={{fontSize:16}}>{item.name}</Text>
                     <Text style={{fontSize:12}}>{item.date}</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>

             <View style={{width:'10%',justifyContent:'center'}}>
                 <TouchableOpacity
                  onPress={()=>onGoBack()}
                 >
                   <Image source={Images.Left}/>
                 </TouchableOpacity>
                
             </View>
            <View>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop:20}}>
                {
                    [1,2,3].map(item=>(
                     <View style={{padding:5,borderRadius:4,borderColor:'black',borderWidth:1,marginLeft:5}}>
                        <Text style={{fontSize:9,lineHeight:16,color:'#3DC35B'}}>OWNERSHIP</Text>
                    </View>
                    ))
                }
              
            </View>
              <Text style={{marginLeft:5, marginTop:20,fontSize:12,maxWidth:300}}>{item.ownership}</Text>
              <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop:20}}>
                {
                    [0,1].map(item=>(
                     <View style={{padding:5,borderRadius:4,borderColor:'black',borderWidth:1,marginLeft:5}}>
                        <Text style={{fontSize:9,lineHeight:16,color:'#83A0F4'}}>CLIENT ENGAGEMENT</Text>
                    </View>
                    ))
                }
              </View>
              <Text style={{marginLeft:5, marginTop:20,fontSize:12,maxWidth:300}}>{item.engagement}</Text>

            </View>
            </View>
        </View>
    )
}

const FullFeedback =(props)=> {
  return (
     <View>
       <FlatList
        horizontal={false}
        data={Data}
        style={{padding:15,height:'100%'}}
        numColumns={1}
        keyExtractor={item=>item.id}
        renderItem={({item})=>
         <ItemFeedback
         item={item} 
         onTabClick ={props.onTabClick}/>
        }
       />
     </View>
  );
}

export default FullFeedback;
