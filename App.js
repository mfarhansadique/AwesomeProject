/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Awesome Project Home Screen</Text>
      </View>
    );
  }
}


  class DetailsScreen extends React.Component {
    render(){
      return (
        <View styles ={{ flex:1, alighnItems: 'center', justifyContent: 'center'}}>
          <Text>Instructions</Text>
        </View>
        );
     }
    }

    const RootStack = createStackNavigator(
      {
        Home: HomeScreen,
        Details: DetailsScreen,
        },
        {
         initialRoutneName: 'Home',
         }
        );

export default class App extends React.Component {
 render() {
   return <RootStack />;
    }
   }
