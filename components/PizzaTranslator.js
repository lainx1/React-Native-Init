import React, {Component} from 'react'
import {Text, TextInput, View, StyleSheet} from 'react-native'
export default class PizzaTranslator extends Component{
    constructor(props){
        super(props)
        this.state = {text: ''}
    }
    render(){
        return (
            <View style ={styles.pizzaTranslatorComponent}>
                <TextInput style={{height: 40}} placeholder = "Type here to translate!" onChangeText={(text) =>this.setState({text})} value = {this.state.text}/>
                <Text style = {{padding: 10, fontSize: 42}}>{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}</Text>                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    pizzaTranslatorComponent: {
        padding: 10,
        textAlign: "center",
    }
})