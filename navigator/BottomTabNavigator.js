import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import TripScreen from '../screens/TripScreen'
import DiaryScreen from '../screens/DiaryScreen'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import SettingScreen from '../screens/SettingScreen'
import { colors } from '../configs/config'

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator initialRouteName='home' screenOptions={{
            tabBarActiveTintColor: colors.white,
            tabBarInactiveTintColor: colors.grey,
            tabBarLabelStyle: { fontFamily: 'VarelaRound', fontSize: 12, paddingBottom: '2%' },
            tabBarIconStyle: { marginTop: '3%' },
            tabBarStyle: { backgroundColor: colors.mainColor }

        }}>
            <Tab.Screen name='home' component={HomeScreen} options={{
                title: 'Home', headerShown: false, tabBarIcon: (tabInfo) => {
                    return (
                        <FontAwesome5 name="home" size={20} color={tabInfo.focused ? "#fff" : "#D9D9D9"} />
                    );
                },
            }} />
            <Tab.Screen name='trips' component={TripScreen} options={{
                title: 'Trips', headerShown: false, tabBarIcon: (tabInfo) => {
                    return (
                        <FontAwesome5 name="clipboard-check" size={20} color={tabInfo.focused ? "#fff" : "#D9D9D9"} />
                    );
                }
            }} />
            <Tab.Screen name='diaries' component={DiaryScreen} options={{
                title: 'Diaries', headerShown: false, tabBarIcon: (tabInfo) => {
                    return (
                        <FontAwesome5 name="book" size={20} color={tabInfo.focused ? "#fff" : "#D9D9D9"} />
                    );
                }
            }} />
            <Tab.Screen name='settings' component={SettingScreen} options={{
                title: 'Settings', headerShown: false, tabBarIcon: (tabInfo) => {
                    return (
                        <FontAwesome name="gear" size={22} color={tabInfo.focused ? "#fff" : "#D9D9D9"} />
                    );
                }
            }} />
        </Tab.Navigator>
    )
}