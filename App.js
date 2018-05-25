import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './Components/MainScreen';

export default class App extends React.Component {
 render(){
 return(
<AppStackNavigator />


 );
}
}

const AppStackNavigator = StackNavigator({
Main: {screen: MainScreen},
Action: {screen: ActionScreen}
})

 const styles = StyleSheet.create ({
   container: {
   flex: 1,
   alignItems: 'center',
   justifyContent:'center'},


 });


const CategoriesStack = createStackNavigator({
       Categories: CategoriesTab,
       Action: ActionScreen,
     });

