import React from "react"
import { View, StyleSheet } from "react-native"

export default (props) => (
    <View style={styles.container}>
        {props.children}
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: "50%",
        marginTop: 20,
        marginLeft: 15,
        justifyContent: "space-between"
    }
})

