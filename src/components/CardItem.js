import { useLinkProps } from '@react-navigation/native'
import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'

const CardItem = ({navigation,img,name,msg,time}) => {
    return (
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Details',{img,name})}
        style={{
            marginBottom:10,
            flexDirection:'row',
            paddingTop:10,
            width:'100%',
            height:75,
            alignItems:'center',
            justifyContent:'space-between',
            paddingVertical:10,


        }}>
            <View style={{
                alignItems:'center',
                marginHorizontal:15
            }}>
                <Image 
                source={img} 
                resizeMode='cover' 
                style={{
                    position:'relative',
                    height:50,
                    width:50,
                    borderRadius:25
                }}
                
                />
            </View>


            <View style={{
                flex:2
            }}>
                <Text style={{
                    fontWeight:'800',
                    color:'black'
                }}>{name}</Text>
                <Text numberOfLines={1} style={{paddingRight:3}}>{msg}</Text>
            </View>


            <View style={{
                flex:.5
            }}>
                <Text style={{
                    fontSize:10,}}>{time}</Text>
                <View></View>
            </View>
        </TouchableOpacity>
    )
}

export default CardItem
