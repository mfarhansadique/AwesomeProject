import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class SettingsTab extends React.Component {
 render(){
 return(
<View style={styles.container}>
  <Text> SettingsTab </Text>
  </View>

 );
}
}

export default SettingsTab;

  const styles = StyleSheet.create ({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'},

 });