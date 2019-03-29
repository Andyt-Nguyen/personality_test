import React from "react"
import { Text, StyleSheet } from "react-native"

export default (props) => 
    <Text style={styles.textStyle}>
        {props.text}
    </Text>


const styles = StyleSheet.create({
    textStyle: {
        textAlign: "left",
        color: "#ffffff",
        fontSize: 18,
        justifyContent: 'center',
        marginBottom: 10
    }
})