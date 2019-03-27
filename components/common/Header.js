import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default (props) => (
    <View style={styles.container}>
        <Text style={styles.centerText}>{props.title}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-end",
        backgroundColor: '#073B4C',
        height: 80
      },

    centerText: {
        marginLeft: 15,
        fontSize: 25,
        color: "#ffffff"
    }
})