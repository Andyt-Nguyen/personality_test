import React from "react"
import { View, FlatList, StyleSheet } from "react-native"
import AttributeContainer from "./AttributeContainer"
import AttributeText from "./AttributeText"
import BtnGroup from "./BtnGroup"

export default class Section extends React.Component {
    state = {
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
        }
    }

    _renderAttributes = ({item}) => {
        return (
          <AttributeText text={item} />
        )
      }
    
      _onPress = (e) => {
        console.log(e)
      }

    render() {
        return (
            <React.Fragment>
                <View style={styles.questionSect}>
                <AttributeContainer>
                    <FlatList
                        data={Object.values(this.state.colorStatements["green"].text[0])}
                        renderItem={this._renderAttributes}
                        keyExtractor={(att) => att}
                    />
                </AttributeContainer>

                <BtnGroup onPress={this._onPress} />
                </View>

                <View style={{borderWidth: .5, borderColor:"rgba(255,255,255,.3)", width:"80%"}}></View>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "#073B4C"
    },
  
    questionSect: {
      flexDirection:"row", 
      justifyContent:"space-between", 
      alignItems:"center", 
      marginBottom:30
    }
  })

// #2A1E5C purple
// #073B4C dark blue
// #B37BA4 light purple pink
// #4E4B5C dark grey
// #38686A dark green