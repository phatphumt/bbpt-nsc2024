import {
    Platform, SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native'
import React from 'react'
import { fonts, colors } from '../configs/config';
import { Feather, Entypo, AntDesign, Foundation } from '@expo/vector-icons';
import Seperator from '../components/Seperator';
import TripsCard from '../components/TripsCard';


const HomeScreen = () => {
    return (
        <ImageBackground source={require('../assets/bg-loginscreen.jpeg')} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>
                <View style={styles.topBar}>
                    <View style={[styles.contentWrapper, { paddingHorizontal: '3%' }]}>
                        <Text style={styles.welcomeText}>Your Trips</Text>
                    </View>
                    <View style={styles.contentWrapper}>
                        <TouchableOpacity onPress={() => { alert('wip!') }} style={styles.signOutBtn}>
                            <Entypo name="add-to-list" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <TripsCard text={'Trip 1'} subtitle={'3 Days'} />
                    <Seperator space={'5%'} />
                    <TripsCard text={'Trip 2'} subtitle={'188 Days'} />
                </View>
            </SafeAreaView>
        </ImageBackground>

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
    }, button: {
        backgroundColor: colors.mainColor,
        borderRadius: 10,
    }, contentWrapper1: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: '7%',
        marginHorizontal: '7%',
        justifyContent: 'space-evenly',
    }, text: {
        textAlign: 'center',
        color: 'white',
        fontFamily: fonts.mainFont,
        paddingTop: '2%',
        fontSize: 20
    }, textWrapper: {
        flexDirection: 'column',
        marginLeft: '10%'
    }, subtitle: {
        textAlign: 'center',
        color: 'white',
        fontFamily: fonts.mainFont,
        paddingTop: '2%',
        fontSize: 13
    }, contentWrapper2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft: '10%',
        width: '30%'
    }, cardContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '5%'
    }
})