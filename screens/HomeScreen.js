import {
    Platform, SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenContext } from 'react-native-screens';
import ScreenTest from './ScreenTest';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
    return (
        <ImageBackground source={require('../assets/bg-loginscreen.jpeg')} resizeMode="cover" style={styles.image}>

            <SafeAreaView style={styles.container}>
                <Text style={styles.welcomeText}>Welcome!</Text>
                <View style={styles.signOutBtnWrapper}>
                    <TouchableOpacity style={styles.signOutBtn}>
                        <Text style={styles.signOutBtnText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
    }, usrIcon: {
        margin: "4%",

    }, welcomeText: {
        fontFamily: "VarelaRound",
        textAlign: 'center',
        fontSize: 30,
        marginTop: '10%',
        marginBottom: '2%',
        color: '#401333'
    }, image: {
        flex: 1
    }, signOutBtnText: {
        fontFamily: "VarelaRound",
        textAlign: 'center',
        margin: '10%',
        color: '#fff'
    }, signOutBtn: {
        backgroundColor: '#3D4267',
        width: '20%',
        borderRadius: 10
    }, signOutBtnWrapper: {
        alignItems: 'center'
    }
})