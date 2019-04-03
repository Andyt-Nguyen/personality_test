import React from "react"
import { NativeRouter, Route} from "react-router-native"
import { View } from "react-native"
import PersonalityPage from "./components/pages/PersonalityPage/PersonalityPage";

export default () => (
  <NativeRouter>
    <View style={{flex:1, backgroundColor:"#000000"}}>
      <Route exact path="/" component={PersonalityPage}/>
    </View>
  </NativeRouter>
)
// import React, {Component} from 'react';
// import { StyleSheet, ScrollView, Animated, FlatList, Modal, View, Text } from 'react-native';
// import { Header, ColorRateSection } from "./components/common"
// import { Button, Icon } from "react-native-elements"
// import personalityContent from "./personality.json"

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       maxPage: 0,
//       isModal: false,
//       orange: 0,
//       green: 0,
//       blue: 0,
//       gold: 0,
//       fadeAnim: new Animated.Value(0),
//       sectionCounter: 0,
//       totalColorCount: {
//         orangeTotal: 0,
//         greenTotal: 0,
//         blueTotal: 0,
//         goldTotal: 0
//       },
//       colorErrors: [],
//       personalityContent: {}
//     }

//     this._scrollViewRef = React.createRef()
//   }

//   componentDidMount() {
//     this._fadeIn()
//     this.setState({personalityContent}, () => {
//       this.setState({maxPage: Object.values(this.state.personalityContent.gold.text).length - 1})
//     })
//   }

//   _renderColorRateSections = () => {
//     if(Object.values(this.state.personalityContent).length > 0) {
//       return (
//         <FlatList
//             data={Object.keys(this.state.personalityContent)}
//             renderItem={({item}) => (
//               <ColorRateSection 
//                 sectionCounter={this.state.sectionCounter}
//                 colorSection={item} 
//                 incColorCount={this._incColorCount}
//                 colorContent={this.state.personalityContent[item].text[this.state.sectionCounter]}
//               />
//             )}
//             keyExtractor={(att) => att}
//           />
//         )
//     }
//   }

//   _incColorCount = (color, num) => {
//     this.setState({[color]: num})
//   } 


//   _onNext = () => {
//     const { green, orange, blue, gold } = this.state
//     const colors = [green, orange, blue, gold];
    

//     if(!colors.includes(1) || !colors.includes(2) || !colors.includes(3) || !colors.includes(4) || colors.includes(0)) {
//       this.setState({isModal:true})
//       return;
//     }


//     if(this.state.sectionCounter < this.state.maxPage) {
//       const { orange, green, blue, gold } = this.state
//       const { orangeTotal, greenTotal, blueTotal, goldTotal} = this.state.totalColorCount
//       const totalColorCount = {
//         orangeTotal: orangeTotal + orange,
//         greenTotal:  greenTotal  + green,
//         blueTotal:   blueTotal   + blue,
//         goldTotal:   goldTotal   + gold
//       }

//       this.setState({ 
//         totalColorCount, sectionCounter: this.state.sectionCounter + 1, 
//         fadeAnim: new Animated.Value(0) 
//       }, () => {
//         this._scrollToTop();
//         this._fadeIn()
//         this.setState({
//           green:  0,
//           blue:   0,
//           gold:   0,
//           orange: 0
//         })
//       })
//     }
//   }

//   _scrollToTop = () => {
//     this._scrollViewRef.current.scrollTo({x:0, y: 0, animated:false})
//   }

//   _fadeIn = () => {
//     Animated.timing(this.state.fadeAnim, {
//       toValue: 1,
//       duration: 1000
//     }).start()
//   }

//   render() {
    
//     return (
//       <ScrollView ref={this._scrollViewRef} style={styles.container}>
//         <Animated.View style={{opacity: this.state.fadeAnim}}> 
//           <Header title={`Find Your Color (${this.state.sectionCounter}/${this.state.maxPage})`} />
//           {this._renderColorRateSections()}

//           <Button
//             onPress={this._onNext}
//             title={this.state.sectionCounter < this.state.maxPage ? "Next" : "Finish"}
//             buttonStyle={{
//               backgroundColor: this.state.sectionCounter < this.state.maxPage ? "#000000" : "#00b3ca" ,
//               ...styles.submitStyle, 
//             }}
            
//           />


//         </Animated.View>
//         <Modal
//           animationType={"slide"}
//           transparent={true}
//           visible={this.state.isModal}
//         >
//           <View style={{backgroundColor:"rgba(0,0,0,0.9)", height:"100%",display:"flex", justifyContent:"space-between", alignItems:"center"}}>
//             <View style={{height:"40%", justifyContent:"flex-end", width: "80%"}}>
//               <Text style={{marginTop:10,color:"white", fontSize:18, textAlign:"center"}}>
//                 Make sure to only select one number that is different from every other section and,
//                 every other section is selected.
//               </Text>
         
//             </View>
//             <Button
//             type={"outline"}
//             onPress={() => this.setState({isModal:false})}
//             titleStyle={{color : "#ffffff",}}
//             buttonStyle={{borderColor:"#ffffff", width:"100%"}}
//             title={"Got it!"}
//           />
//           </View>
//         </Modal>
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#073B4C"
//   },

//   submitStyle: {
//     paddingBottom: 20, 
//     paddingTop: 20
//   }
// })
// {/* <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}> */}


// {/* <Icon
// name="ios-checkmark-circle-outline"
// type="ionicon"
// color="#ffffff"
// size={30}
// /> */}