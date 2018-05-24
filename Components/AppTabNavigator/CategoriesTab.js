import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class CatergoriesTab extends React.Component {
 render(){
 return(
<View style={styles.container}>
  <Text> CatergoriesTab </Text>
  </View>

 );
}
}

export default CatergoriesTab;

  const styles = StyleSheet.create ({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'},

 });