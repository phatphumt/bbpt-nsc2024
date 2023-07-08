import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import TripScreen from '../screens/TripScreen'
import DiaryScreen from '../screens/DiaryScreen'
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{ tabBarActiveTintColor: "#3D4267", tabBarInactiveTintColor: "#d9d9d9", tabBarLabelStyle: { fontFamily: } }}>
            <Tab.Screen name='Home' component={HomeScreen} options={{
                title: 'Home', headerShown: false, tabBarIcon: (tabInfo) => {
                    return (
                        <Foundation name="home" size={24} color={tabInfo.focused ? "#3D4267" : "#D9D9D9"} />
                    );
                },
            }} />
            <Tab.Screen name='Trips' component={TripScreen} options={{
                title: 'Trips', headerShown: false, tabBarIcon: (tabInfo) => {
                    return (
                        <FontAwesome5 name="clipboard-check" size={24} color={tabInfo.focused ? "#3D4267" : "#D9D9D9"} />
                    );
                }
            }} />
            <Tab.Screen name='Diaries' component={DiaryScreen} options={{
                title: 'Trips', headerShown: false, tabBarIcon: (tabInfo) => {
                    return (
                        <FontAwesome5 name="book" size={24} color={tabInfo.focused ? "#3D4267" : "#D9D9D9"} />
                    );
                }
            }} />
        </Tab.Navigator>
    )
}