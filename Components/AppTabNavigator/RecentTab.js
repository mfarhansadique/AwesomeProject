import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class RecentTab extends React.Component {
 render(){
 return(
<View style={styles.container}>
  <Text> RecentTab </Text>
  </View>

 );
}
}

export default RecentTab;

  const styles = StyleSheet.create ({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'},

 });