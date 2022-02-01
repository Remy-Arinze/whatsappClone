import React from 'react'
import { View, Text, Pressable,Image } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

const ChattHeader = ({img,name,navigation}) => {
    const backIcon = <FontAwesome5Icon name='arrow-left' size={20} color={'#1A2421'}/>
    const phoneIcon = <FontAwesome5Icon name='phone' size={20} color={'#1A2421'}/>
    const videoIcon = <FontAwesome5Icon name='video' size={20} color={'#1A2421'}/>
    const ellipsis = <FontAwesome5Icon name='ellipsis-v' size={20} color={'#1A2421'}/>

    navigation = useNavigation()
    return (
        <View style={{
            flexDirection:'row',
            height:70,
            alignItems:'center',
            justifyContent:'space-between',
            paddingHorizontal:15,
            paddingVertical:12
        }}>
            <View style={{ flexDirection:'row',flex:1,alignItems:'center'}}>
                <Pressable style={{marginRight:10}}>{backIcon}</Pressable>
                <View><Image resizeMode='cover' style={{height:40,width:40, borderRadius:20}} source={img}/></View>
            </View>

            <View style={{
                flex:2
            }}><Text style={{
                fontWeight:'800',
                letterSpacing:2,
                fontSize:16,
                color:'#1A2421'
            }}>{name}</Text></View>


            <View style={{
                alignItems:'center',
                justifyContent:'space-between',
                flex:1.5,
                flexDirection:'row'
            }}>
                <View>{phoneIcon}</View>
                <View>{videoIcon}</View>
                <View>{ellipsis}</View>
            </View>
        </View>
    )
}

export default ChattHeader
