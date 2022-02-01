import React from 'react'
import { View, Text,Dimensions } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Header from '../components/Header'

const StatusScreen = () => {
    const icon1 = <FontAwesome5Icon name='search' size={20} color={'#1A2421'} />
    const icon2 = <FontAwesome5Icon name='ellipsis-v' size={20} color={'#1A2421'} />
    return (
        <View style={{
            
        }}>
        <Header 
            title='Status'
            icons2={icon1}
            icons3={icon2}
        />
            
        </View>
    )
}

export default StatusScreen
