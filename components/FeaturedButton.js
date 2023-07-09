import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { fonts, colors } from '../configs/config';

const FeaturedButton = (props) => {
    const { button, contentWrapper, text } = styles
    return (
        <TouchableOpacity style={button} onPress={props.onClick}>
            <View style={contentWrapper}>
                <FontAwesome5 name={props.iconName} size={70} color="white" />
                <View style={styles.a}>
                    <Text style={text}>{props.msg}</Text>
                    <Text style={text}>{props.msg}</Text>
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
    }, contentWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: '15%',
        marginHorizontal: '7%',
        justifyContent: 'space-evenly'
    }, text: {
        textAlign: 'center',
        color: 'white',
        fontFamily: fonts.mainFont,
        paddingTop: '2%'
    }, a: {
        flexDirection: 'column'
    }
})