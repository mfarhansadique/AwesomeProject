import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import HomeTab from './AppTabNavigator/HomeTab';
import CategoriesTab from './AppTabNavigator/CategoriesTab';
import RecentTab from './AppTabNavigator/RecentTab';
import SettingsTab from './AppTabNavigator/SettingsTab';

import {TabNavigator, StackNavigator} from 'react-navigation';
import { Icon, Container, Content, Header, Body, Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';


class MainScreen extends React.Component {

   static navigationOptions = {

  header: null,

   }

 render(){
 return(
  <AppTabNavigator />

 );
}
}

export default MainScreen
  const AppTabNavigator = TabNavigator ({
  Home:{
    screen: HomeTab
    },
  Categories:{
     screen: CategoriesTab
    },
  Recent:{
      screen: RecentTab
     },
   Settings:{
       screen: SettingsTab
     }

  },{
  animationEnabled:false,
  swipeEnabled:false,
  tabBarPosition:"bottom",
  tabBarOptions: {
  style: {
  ...Platform.select({
  android:{
    backgroundColor: 'white'
  }
  })},
  activeTintColor:'#09a1e2',
  inactiveTintColor: '#d1cece',
  showLabel: true,
  showIcon: false
  }



  })

  const styles = StyleSheet.create ({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'},

 });


