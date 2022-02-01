import React,{useState} from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import Icons from 'react-native-vector-icons/MaterialIcons'

const BottomTab = () => {
    const [textInput,handleTextInput] = useState('')

    const pressed = ()=>{
        if(textInput){
            sendInput(textInput)
            handleTextInput('')
        }else{
            Recording()
        }
    }

    const sendInput = (data)=>{
        console.warn('sending', data)
    }
    const Recording = ()=>{
        console.warn('Recording')
    }


    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Icons name='emoji-emotions' size={25} color='#1A2421'/>
                <TextInput 
                multiline 
                style={styles.text} 
                onChangeText={handleTextInput}
                value={textInput}
                />

                <Icons style={styles.icon} name='image' size={25} color='#1A2421'/>
                {textInput ? null: <Icons style={styles.icon} name='camera-alt' size={25} color='#1A2421' />}
            </View>

            <TouchableOpacity onPress={pressed} style ={styles.button}>
                {textInput ? <Icons name='send' size={23} color={'white'}  /> : <Icons name='mic' size={25} color={'white'} />}
            </TouchableOpacity>
        </View>
    )
}

export default BottomTab
