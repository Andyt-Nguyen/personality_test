/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import { Header, AttributeText, Questionaire } from "./components/common"
import colorStatements from "./personality.json"

export default class App extends Component {
  state = {
    questionaireCounter: 0,
    colorStatements: {
      "orange": {
          "text": [
              ["Active", "Variety", "Sports", "Opportunities", "Spontaneous", "Flexible"],
              ["Action", "Challenges", "Competitive", "Impetuous", "Impactful"],
              ["Playful", "Quick", "Adventurous", "Confrontive", "Open Minded", "Independent"],
              ["Active", "Free", "Winning", "Daring", "Impulsive", "Risk Taker"],
              ["Exciting", "Lively", "Hands On", "Courages", "Skillful", "On Stage"]
          ]
      },
  
      "green": {
          "text": [
              ["Learning", "Science", "Quiet", "Versatile", "Inventive", "Competent"],
              ["Curios", "Ideas", "Questions", "Conceptual", "Knowlege", "Problem Solver"],
              ["Independent", "Exploring", "Competent", "Theoretical", "Why Questions", "Ingenious"],
              ["Thinking", "Problem Solving", "Perfectionist", "Determined", "Complexed", "Composed"],
              ["Puzzles", "Seeking Info", "Making Sense", "Philosophical", "Principled", "Rational"]
          ]
      },
  
      "blue": {
          "text": [
              ["Warm", "Helpful", "Friends", "Authentic", "Harmonious", "Compassionate"],
              ["Caring", "People Oriented", "Feelings", "Unique", "Empathetic", "Communacative"],
              ["Kind", "Understanding", "Giving", "Devoted", "Warm", "Poetic"],
              ["Sharing", "Getting Along", "Feelings", "Tender", "Inspirational", "Dramatic"],
              ["Socal Causes", "Easy Going", "Happy Endings", "Approachable", "Affectionate", "Sympathetic"]
          ]
      },
  
      "gold": {
          "text": [
              ["Organized", "Planned", "Neat", "Parental", "Traditional", "Responsible"],
              ["Orderly", "On-Time", "Honest", "Stable", "Sensible", "Dependable"],
              ["Helpful", "Trustworthy", "Dependable", "Loyal", "Conservative", "Organized"],
              ["Follow", "Rules","Useful", "Save Money", "Concerned", "Procedural", "Cooperative"],
              ["Pride", "Tradition", "Do things right", "Orderly", "Conventional", "Careful"]
          ]
      }
  },
    green: 0,
    blue: 0,
    gold: 0,
    orange: 0
  }

  componentDidMount() {
    this.setState({colorStatements})
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <Header title={"Section One"} />
        <Questionaire />
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#073B4C"
  }
})