import React from 'react'
import { View, Text, Dimensions} from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Header from '../components/Header'

const GroupScreen = () => {
    const icon1 = <FontAwesome5Icon name='moon' size={20} color={'#1A2421'} />
    const icon2 = <FontAwesome5Icon name='search' size={20} color={'#1A2421'} />
    const icon3 = <FontAwesome5Icon name='ellipsis-v' size={20} color={'#1A2421'} />
    return (
        <View style={{
        }}>
        <Header 
            title='Groups'
            icons={icon1}
            icons2={icon2}
            icons3={icon3}
        />
        </View>
    )
}

export default GroupScreen
