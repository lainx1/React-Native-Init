import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import Bananas from './Bananas';

export default function App() {
  return (    
    <View style={styles.container}>
      <Bananas alignSelf = "flex-start" src = "https://i2.wp.com/consolaytablero.com/wp-content/uploads/2018/02/Annie.jpg"/>
      <Bananas src = "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e0/Kindred_OriginalCentered.jpg"/>
      <Bananas src = "http://3.bp.blogspot.com/-Aq7Xvg15p4w/VQCeZa1Jj1I/AAAAAAAAljA/IUcdFOwTPww/s1600/sorakafront.jpg"/>
      <Bananas alignSelf = "flex-end"/>
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
