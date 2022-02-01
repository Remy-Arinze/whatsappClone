import React,{useState} from 'react'
import { View, Text,Dimensions, Pressable,Image } from 'react-native'
import {launchImageLibrary,launchCamera} from 'react-native-image-picker'

const Camera = () => {
    const [image,setImage] = useState()

    function handlePressCamera(){
        const options = {

        }
        launchCamera(options, cb =>{
            console.log(cb);
            let assets = cb.assets
            if(assets){
                setImage(assets[0].uri)
            }
        })
    }


    function handlePressGallery(){
        const options = {

        }
        launchImageLibrary(options, cb =>{
            console.log(cb);
        })
    }
    return (
        <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center', flex:1}}>
            <Image source={image}
                style={{
                    height:50,
                    width:50
                }}
            />
            <Pressable onPress={handlePressCamera} style={{backgroundColor:'black', padding:10}}>
                <Text style={{color:'white'}}>Camera</Text>
            </Pressable>
            <Pressable onPress={handlePressGallery} style={{backgroundColor:'green', padding:10}}>
                <Text style={{color:'white'}}>Gallery</Text>
            </Pressable>
        </View>
    )
}

export default Camera
