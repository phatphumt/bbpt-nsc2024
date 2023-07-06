import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen() {
    return (
        <ImageBackground source={require('../assets/bg-loginscreen.jpeg')} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.welcomeText}>Welcome!</Text>
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
        margin: '10%'
    }, image: {
        flex: 1
    }
})