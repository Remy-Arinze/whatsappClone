import React from 'react'
import { Pressable,Keyboard, FlatList, Text } from 'react-native'

import TextItem from '../components/TextItem/TextItem'
import {chats} from '../Data/Chats'
import ChattHeader from '../components/ChattHeader'
import MsgTile from '../components/msgTile/MsgTile'


const ChatDetail = ({navigation,route}) => {
    const {name,img} = route.params
    return (
        <Pressable 
            onPress={Keyboard.dismiss} style={{flex:1}}>
            <ChattHeader
                func = {navigation}
                name={name}
                img={img}
            />

            <FlatList
            showsHorizontalScrollIndicator={false}
            style={{
                marginHorizontal:10
            }}
                data={chats[0].messages}
                renderItem={({item})=>{
                    return <MsgTile 
                        name={item.User}
                        msg={item.msg}
                    />
                }}
            />

            <TextItem />
        </Pressable>
    )
}

export default ChatDetail
