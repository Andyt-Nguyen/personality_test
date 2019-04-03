import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

export default (props) => (
    <TouchableOpacity 
        style={{
            ...styles.btnStyle,
            borderColor: props.color,
            backgroundColor: props.num === parseInt(props.text) ? props.color: "transparent"
        }} 
        onPress={props.onPress}
    >
        <Text style={styles.textStyle}>{props.text}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    textStyle: {
        color:"#ffffff",
        fontSize: 20
    },
    btnStyle: {
        width: 60,
        height: 60,
        borderWidth:1,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    }
})