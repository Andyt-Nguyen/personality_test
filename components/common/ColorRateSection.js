import React from "react"
import { View, FlatList, StyleSheet} from "react-native"
import personalityContent from "../../personality.json"
import {
    AttributeContainer, 
    AttributeText, 
    CircleBtn, 
    Center, 
    BtnWrapper
} from "../common"

export default class ColorRateSection extends React.Component {
    state = {
        selectedNum: 0,
        personalityContent: {}
    }

    componentDidMount() {
        this.setState({personalityContent})
    }

    _renderColorAttList = () => {
        return (
            <FlatList
                data={this.props.colorContent}
                renderItem={({item}) => <AttributeText text={item} />}
                keyExtractor={(att) => att}
            />
        )        
    }
    
    _onBtnStyle = (btnName) => {
        this.setState({
            [btnName]: !this.state[btnName],
        })

    }

    _onSelectedNum = (num) => {
        if(this.state.selectedNum != 0) {
            this.setState({selectedNum: 0}, () => {
                this.props.incColorCount(this.props.colorSection, this.state.selectedNum)
            })
        } else {
            this.setState({selectedNum: num}, () => {
                this.props.incColorCount(this.props.colorSection, this.state.selectedNum)
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.sectionCounter !== nextProps.sectionCounter) {
            this.setState({selectedNum: 0})
            return true
        } else {
            return false;
        }
    }

    render() {
        return (
            <React.Fragment>
                
                <View style={styles.questionSect}>
                    <AttributeContainer>
                        {this._renderColorAttList()}
                    </AttributeContainer>

                    <Center>
                        <BtnWrapper>
                            <CircleBtn 
                                onPress={() => this._onSelectedNum(1)}
                                num={this.state.selectedNum}
                                color={"#EF476F"} 
                                text={"1"} 
                            />
                            
                            <CircleBtn 
                                onPress={() => this._onSelectedNum(2)}
                                num={this.state.selectedNum}
                                color={"#1AA1E2"} 
                                text={"2"} 
                            />
                        </BtnWrapper>

                        <BtnWrapper>
                            <CircleBtn 
                                onPress={() => this._onSelectedNum(3)}
                                num={this.state.selectedNum}
                                color={"#FFD166"} 
                                text={"3"} 
                            />

                            <CircleBtn 
                                onPress={() => this._onSelectedNum(4)}
                                num={this.state.selectedNum}
                                color={"#06D6A0"} 
                                text={"4"} 
                            />
                        </BtnWrapper>
                    </Center>

                    
                </View>

                <View style={styles.hr} />
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
      },
  
      hr: {
        borderWidth: .5, 
        borderColor:"rgba(255,255,255,.3)", 
        width:"80%"
    }
})