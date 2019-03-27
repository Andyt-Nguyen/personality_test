/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, CircleButton, Question } from "./components/common"

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Section One"} />
        <Question />
        <View style={styles.btnWrapper}>
          <CircleButton color={"#EF476F"} text={"1"} />
          <CircleButton color={"#1AA1E2"} text={"2"} />
          <CircleButton color={"#FFD166"} text={"3"} />
          <CircleButton color={"#06D6A0"} text={"4"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#073B4C"
  },

  btnWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  }
})

// #2A1E5C purple
// #073B4C dark blue
// #B37BA4 light purple pink
// #4E4B5C dark grey
// #38686A dark green