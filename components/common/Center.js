import React from "react"
import { View, StyleSheet } from "react-native"

export default (props) => (
    <View style={props.center}>
        {props.children}
    </View>
)

const styles = StyleSheet.create({
    center: {
        justifyContent: "center"
    }
})