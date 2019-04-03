import React from "react"
import { View, StyleSheet } from "react-native"

export default (props) => (
    <View style={styles.btnWrapper}>
        {props.children}
    </View>
)

const styles = StyleSheet.create({
    btnWrapper: {
        width:"50%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
    }
})