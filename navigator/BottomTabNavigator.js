import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import TripScreen from '../screens/TripScreen'
import DiaryScreen from '../screens/DiaryScreen'
import { Foundation } from '@expo/vector-icons';
import { Svg } from 'react-native-svg'

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{ tabBarActiveTintColor: "#3D4267", tabBarInactiveTintColor: "#d9d9d9" }}>
            <Tab.Screen name='Home' component={HomeScreen} options={{
                title: 'Home', headerShown: false
            }} />
            <Tab.Screen name='Trips' component={TripScreen} options={{ title: 'Trips', headerShown: false }} />
            <Tab.Screen name='Diaries' component={DiaryScreen} options={{ title: 'Diaries', headerShown: false }} />
        </Tab.Navigator>
    )
}