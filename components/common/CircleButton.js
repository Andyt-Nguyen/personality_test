import React from "react"
import { View, Button, StyleSheet } from "react-native"

export default (props) => (
    <View style={{...styles.btnStyle, backgroundColor:props.color}}>
        <Button
            title={`${props.text}`}
            color="#ffffff"
            accessibilityLabel={"Button " + props.text }
        />
    </View>
)

const styles = StyleSheet.create({
    btnStyle: {
        width: 60,
        height: 60,
        backgroundColor: "#25A18E",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    }
})