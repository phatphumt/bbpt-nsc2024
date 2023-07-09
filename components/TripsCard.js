import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { fonts, colors } from '../configs/config';
import { Feather, Entypo, AntDesign, Foundation } from '@expo/vector-icons';

const TripsCard = (props) => {
    const [featured, setFeatured] = useState(false)
    console.log('b', featured)
    return (
        <View style={styles.cardContainer}>
            <View style={styles.button}>
                <View style={styles.contentWrapper1}>
                    <Feather name="image" size={75} color="white" />
                    <View style={styles.textWrapper}>
                        <Text style={styles.text}>{props.text}</Text>
                        <Text style={styles.subtitle}>{props.subtitle}</Text>
                    </View>
                    <View style={styles.iconWrapper}>
                        <TouchableOpacity onPress={() => {
                            featured ? setFeatured(false) : setFeatured(true)
                            console.log('state change: ', featured)
                        }}>
                            <AntDesign name="star" size={24} color={featured ? "#FFD600" : "white"} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Foundation name="pencil" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default TripsCard

const styles = StyleSheet.create({
    contentWrapper: {
        justifyContent: 'center',
        padding: '2%'
    }, button: {
        backgroundColor: colors.mainColor,
        borderRadius: 10,
        marginHorizontal: '10%'
    }, contentWrapper1: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: '7%',
        marginHorizontal: '7%',
        justifyContent: 'space-between'
    }, text: {
        textAlign: 'center',
        color: 'white',
        fontFamily: fonts.mainFont,
        paddingTop: '2%',
        fontSize: 20
    }, textWrapper: {
        flexDirection: 'column',
        marginLeft: '12%'
    }, subtitle: {
        textAlign: 'center',
        color: 'white',
        fontFamily: fonts.mainFont,
        paddingTop: '1%',
        fontSize: 13
    }, iconWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft: '10%',
        width: '30%'
    },
})