import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import Bananas from './Bananas';
import PizzaTranslator from './components/PizzaTranslator';

export default function App() {
  return (    
    <View style={styles.container}>
      <PizzaTranslator/>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column-reverse',
  },  
});
