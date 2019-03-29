import React from "react"
import { View, StyleSheet } from "react-native"
import CircleButton from "./CircleButton"

export default ({onPress}) => (
    <View style={styles.btnContainer}>
        <View style={styles.btnWrapper}>
            <CircleButton onPress={() => this.onPress(1)} color={"#EF476F"} text={"1"} />
            <CircleButton onPress={() => this.onPress(2)} color={"#1AA1E2"} text={"2"} />
        </View>
        <View style={styles.btnWrapper}>
            <CircleButton onPress={() => this.onPress(3)} color={"#FFD166"} text={"3"} />
            <CircleButton onPress={() => this.onPress(4)} color={"#06D6A0"} text={"4"} />
        </View>
    </View>
)


const styles = StyleSheet.create({
    btnWrapper: {
        width:"50%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
    },
    
    btnContainer: {
        justifyContent: "center"
    },
})
