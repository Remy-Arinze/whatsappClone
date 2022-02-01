import React from 'react'
import { View, Text } from 'react-native'

const Header = (props) => {
    return (
        <View style={{
            flexDirection:'row',
            height:70,
            alignItems:'center',
            justifyContent:'space-between',
            paddingHorizontal:15,
            paddingVertical:12
        }}> 
            <View>
                <Text style={{
                    fontSize:20,
                    fontWeight:'800',
                    color:'#1A2421',
                    alignItems:'center'
                }}>{props.title}</Text>

                {props.subtitle?<Text style={{
                    color:'#1A2421',
                    fontWeight:'500'
                }}>{props.subtitle}</Text> : null}
            </View>

            <View style={{
                alignItems:'center',
                justifyContent:'space-between',
                flexDirection:'row',
                width:'30%',
            }}>
            
            <View>{props.icons}</View>
            {props.icons2}
            {props.icons3}
            </View>
        </View>
    )
}

export default Header
