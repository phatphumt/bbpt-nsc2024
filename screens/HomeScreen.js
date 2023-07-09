import {
    Platform, SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { fonts, colors } from '../configs/config';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { signOut } from "firebase/auth";
import { firebase_auth } from '../firebase';
import MenuButton from '../components/MenuButton';
import FeaturedButton from '../components/FeaturedButton';


const HomeScreen = () => {
    const navigation = useNavigation()
    const auth = firebase_auth
    const handleSignOut = () => {
        Alert.alert('Sign Out', 'Are you sure?', [
            {
                text: 'No',
                style: 'cancel',
            },
            {
                text: 'Yes', onPress: () => {
                    signOut(auth).then(() => {
                        navigation.replace("Login")
                    }).catch((error) => { alert(error) })
                }
            }
        ]);
    }
    return (
        <ImageBackground source={require('../assets/bg-loginscreen.jpeg')} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>
                <View style={styles.topBar}>
                    <View style={[styles.contentWrapper, { paddingHorizontal: '3%' }]}>
                        <Text style={styles.welcomeText}>Welcome!</Text>
                    </View>
                    <View style={styles.contentWrapper}>
                        <TouchableOpacity onPress={handleSignOut} style={styles.signOutBtn}>
                            <Feather name="log-out" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.allWrapper}>
                    <Text style={styles.headerText}>Get Started</Text>
                    <View style={styles.buttonWrapper}>
                        <MenuButton msg={"Plan a Trip"} iconName={"clipboard-check"} onClick={() => navigation.navigate('Main', { screen: 'trips' })} />
                        <MenuButton msg={"My Diaries"} iconName={"book"} onClick={() => { console.log('hi'); navigation.navigate('Main', { screen: 'diaries' }) }} />
                    </View>
                    <Text style={[styles.headerText, { paddingVertical: '5%' }]}>Featured Trip</Text>
                    <View style={styles.featuredCardWrapper}>
                        <FeaturedButton text={'Trip 1'} subtitle={'3 Days'} iconName={"book"} onClick={() => navigation.navigate('Main', { screen: 'diaries' })} />
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground >

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
    }, usrIcon: {
        margin: "4%",

    }, welcomeText: {
        fontFamily: fonts.mainFont,
        fontSize: 30,
        color: colors.white
    }, topBar: {
        backgroundColor: colors.mainColor,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, image: {
        flex: 1
    }, contentWrapper: {
        justifyContent: 'center',
        padding: '2%'
    }, headerText: {
        textAlign: 'center',
        fontFamily: fonts.mainFont,
        fontSize: 25,
        color: '#4a4453'
    }, allWrapper: {
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
    }, buttonWrapper: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-evenly',
        marginTop: '4%'
    }, featuredCardWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})