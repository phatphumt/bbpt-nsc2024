import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Alert(props) {
    if (!props.msg) { return <Text></Text> }
    return (
        <View>
            <Text style={stt.text}>{props.msg}</Text>
        </View>
    )
}

const stt = StyleSheet.create({
    text: {
        color: 'red',
        fontSize: 15,
        fontFamily: "VarelaRound",
        textAlign: 'center'
    }
})