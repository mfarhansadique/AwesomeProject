import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import HomeTab from './AppTabNavigator/HomeTab'
import CatergoriesTab from './AppTabNavigator/CatergoriesTab'
import RecentTab from './AppTabNavigator/RecentTab'
import SettingsTab from './AppTabNavigator/SettingsTab'
import {TabNavigator} from 'react-navigation'
import { icon } from 'native-base'


class MainScreen extends React.Component {

   static navigationOptions = {

   title: "Home"

   }

 render(){
 return(
<View style={styles.container}>
  <Text> MainScreen </Text>
  </View>

 );
}
}

export default MainScreen
  const AppTabNavigator = TabNavigator ({
  HomeTab:{
    screen: HomeTab
    }
  CategoriesTab:{
     screen: CategoriesTab
    }
  RecentTab:{
      screen: RecentTab
     }
   SettingsTab:{
       screen: SettingsTab
     }

  })

  const styles = StyleSheet.create ({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'},

 });