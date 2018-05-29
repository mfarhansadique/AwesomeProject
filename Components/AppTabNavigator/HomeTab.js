import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView
} from 'react-native';
import {Icon, Container, Content, Header, Body, Button} from 'native-base'
import { StackNavigator } from 'react-navigation';
import SegmentControl from 'react-native-segment-controller';

class HomeTab extends React.Component {

static navigationOptions = {
title: 'Home',};





 render(){

 return(
<SegmentControl
          values={['Latest Updates', 'Popular']}
          badges={[0, 0, 0, 0]}
          selectedIndex={0}
          height={30}
          onTabPress={() => {}}
          borderRadius={5}
 />


 );
}
}

export default HomeTab;
  const styles = StyleSheet.create ({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'},

 });