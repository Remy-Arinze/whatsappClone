import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './global/styles'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/FontAwesome5'

import CameraScreen from './screens/Camera'
import ChatScreen from './screens/ChatScren'
import GroupScreen from './screens/GroupScreen'
import StatusScreen from './screens/StatusScreen'
import PhoneScreen from './screens/PhoneScreen'
import ChatDetail from './screens/ChatDetail'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const myTheme = {
  dark: false,
  colors:{
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  }
}

const TabNavigator = ()=>{
  return(
    <Tab.Navigator 
    initialRouteName='Chat'
    screenOptions={({route})=>({
      tabBarIcon: ({focused,color,size})=>{
        let IconName;

        if(route.name === 'Camera'){
          IconName = 'camera'
          size = focused? 30 :20
          color = focused? 'teal': '#1A2421'
        }
        else if(route.name === 'Chat'){
          IconName = 'comment'
          size = focused? 30:20
          color= focused? 'teal': '#1A2421'
        }
        else if(route.name === 'Group'){
          IconName = 'comments'
          size = focused? 30:20
          color= focused? 'teal': '#1A2421'
          
        }
        else if(route.name === 'Status'){
          IconName = 'rss'
          size = focused? 30:20
          color= focused? 'teal': '#1A2421'
        }
        else if(route.name === 'Phone'){
          IconName = 'phone'
          size = focused? 30:20
          color= focused? 'teal': '#1A2421'
        }

        return <MaterialIcons name={IconName} size={size} color={color} />;

      },
      headerShown:false,
    
      tabBarShowLabel:false,
      tabBarStyle:{
        elevation:2,
        borderRadius:10,
        backgroundColor:'white',
        height:60,
        position:'absolute',
        bottom:2,
        left:'2%',
        width:'96%',
      },

    })
    }
    >
      <Tab.Screen name="Camera" component={CameraScreen}/>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Group" component={GroupScreen} />
      <Tab.Screen name='Status' component={StatusScreen} />
      <Tab.Screen name='Phone' component={PhoneScreen} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
      screenOptions={()=>({
        headerShown:false
      })
      } 
      >
        <Stack.Screen name='Tab' component={TabNavigator}/>
        <Stack.Screen name='Details' component={ChatDetail} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
