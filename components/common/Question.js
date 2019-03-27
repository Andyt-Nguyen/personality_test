import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default (props) => (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.textStyle}>
                You find it difficult to introduce yourself to other people.
            </Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    textStyle: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 15,
        justifyContent: 'center'
    },
    
    textContainer: {
        width: "70%",
        marginLeft: 10,
        marginTop: 10
    },

    container: {
        marginTop: 20,
        alignItems: "center"
    }
})

