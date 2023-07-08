import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Alert(props) {
    if (!props.msg) { return <Text></Text> }
    return (
        <View>
            <Text style={{
                color: 'red',
                fontSize: props.size,
                fontFamily: "VarelaRound",
                textAlign: 'center'
            }}>{props.msg}</Text>
        </View>
    )
}