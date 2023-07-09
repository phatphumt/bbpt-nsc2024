import React from 'react'
import { fonts, colors } from '../configs/config';
import { FontAwesome5 } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'

const MenuButton = (props) => {
    const { button, contentWrapper, text } = styles
    return (
        <TouchableOpacity style={button}>
            <View style={contentWrapper}>
                <FontAwesome5 name={props.iconName} size={70} color="white" />
                <Text style={text}>{props.msg}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MenuButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.mainColor,
        borderRadius: 10
    }, contentWrapper: {
        alignItems: 'center',
        flexDirection: 'column',
        marginVertical: '15%',
        marginHorizontal: '7%'
    }, text: {
        textAlign: 'center',
        color: 'white',
        fontFamily: fonts.mainFont,
        paddingTop: '2%'
    }
})