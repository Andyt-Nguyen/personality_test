import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

export default (props) => (
    <TouchableOpacity 
        style={{...styles.btnStyle, backgroundColor:props.color}} 
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
        width: 55,
        height: 55,
        backgroundColor: "#25A18E",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    }
})