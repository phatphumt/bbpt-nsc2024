import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { fonts, colors } from '../configs/config';

const FeaturedButton = (props) => {
    const { button, contentWrapper, text, subtitle } = styles
    return (
        <TouchableOpacity style={button} onPress={() => alert('WIP')}>
            <View style={contentWrapper}>
                <Feather name="image" size={75} color="white" />
                <View style={styles.a}>
                    <Text style={text}>{props.text}</Text>
                    <Text style={subtitle}>{props.subtitle}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FeaturedButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.mainColor,
        borderRadius: 10,
        width: '50%'
    }, contentWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: '15%',
        marginHorizontal: '7%',
        justifyContent: 'space-evenly',
    }, text: {
        textAlign: 'center',
        color: 'white',
        fontFamily: fonts.mainFont,
        paddingTop: '2%',
        fontSize: 20
    }, a: {
        flexDirection: 'column'
    }, subtitle: {
        textAlign: 'center',
        color: 'white',
        fontFamily: fonts.mainFont,
        paddingTop: '2%',
        fontSize: 13
    }
})