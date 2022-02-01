import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

const MsgTile = ({msg, name}) => {
    
    return (
        <View style={[styles.container, {
            backgroundColor: name === "Remi"? 'green' : 'white',
            marginLeft: name === 'Remi'? 100  : 0,
            marginRight: name === 'Remi'? 0 : 100 
        }]}>
            <View style={styles.main}>
                <Text style={{
                    color: name === "Remi"? 'white' : 'black' 
                }}>{name}</Text>
                <Text style={{
                    color: name === "Remi"? 'white' : 'black' 
                }}>{msg}</Text>
            </View>
        </View>
    )
}

export default MsgTile