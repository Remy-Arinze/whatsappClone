import React from 'react'
import { View, Text, Dimensions, FlatList } from 'react-native'
import Header from '../components/Header'
import MaterialIcons from 'react-native-vector-icons/FontAwesome5'
import { chat } from '../constants/chats'
import CardItem from '../components/CardItem'


const ChatScren = ({navigation}) => {

    const icon1 = <MaterialIcons name = 'moon' size={20} color='#1A2421' />
    const icon2 = <MaterialIcons name = 'search' size={20} color='#1A2421'/>
    const icon3 = <MaterialIcons name = 'ellipsis-v' size={20} color='#1A2421'/>


    return (
        <View style={{
            height:Dimensions.get('window').height,
            fontSize:20
        }}>
        <Header 
            title='whatsapp'
            subtitle="Remi"
            icons = {icon1}
            icons2 = {icon2}
            icons3 ={icon3}
        />

        <FlatList 
            showsVerticalScrollIndicator = {false}
            data={chat}
            renderItem={({item})=>{
                return <CardItem 
                    img={item.img}
                    name={item.name}
                    msg={item.msg}
                    time={item.time}
                    navigation={navigation}
                />
            }}
        />
        </View>
    )
}

export default ChatScren
