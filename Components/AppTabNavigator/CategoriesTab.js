import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  WebView
} from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

class CategoryTab extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Action"
          onPress={() => this.props.navigation.navigate('Action')}
        />
        <Button
                  title="Mystery"
                  onPress={() => this.props.navigation.navigate('Mystery')}
                />
                <Button
                          title="Comedy"
                          onPress={() => this.props.navigation.navigate('Comedy')}
                        />
                        <Button
                                  title="Fantasy"
                                  onPress={() => this.props.navigation.navigate('Fantasy')}
                                />
                                <Button
                                          title="Adventure"
                                          onPress={() => this.props.navigation.navigate('Adventure')}
                                        />

      </View>
    );
  }
}

class ActionScreen extends React.Component {
    render() {
      return (
        <WebView
          source={{uri: 'http://www.mangadeep.com/manga-list/category/Action/most-popular/'}}
          style={{marginTop: 20}}
        />
      );
    }
  }

class MysteryScreen extends React.Component {
    render() {
      return (
        <WebView
          source={{uri: 'http://www.mangadeep.com/manga-list/category/Mystery/most-popular/'}}
          style={{marginTop: 20}}
        />
      );
    }
  }

  class ComedyScreen extends React.Component {
      render() {
        return (
          <WebView
            source={{uri: 'http://www.mangadeep.com/manga-list/category/Comedy/most-popular/'}}
            style={{marginTop: 20}}
          />
        );
      }
    }

    class FantasyScreen extends React.Component {
        render() {
          return (
            <WebView
              source={{uri: 'http://www.mangadeep.com/manga-list/category/Fantasy/most-popular/'}}
              style={{marginTop: 20}}
            />
          );
        }
      }

      class AdventureScreen extends React.Component {
          render() {
            return (
              <WebView
                source={{uri: 'http://www.mangadeep.com/manga-list/category/Adventure/most-popular/'}}
                style={{marginTop: 20}}
              />
            );
          }
        }

const RootStack = StackNavigator(
  {
    Category: {
      screen: CategoryTab,
    },
    Action: {
      screen: ActionScreen,
    },
    Mystery: {
          screen: MysteryScreen,
        },
        Action: {
              screen: ComedyScreen,
            },
            Action: {
                  screen: FantasyScreen,
                },
                Action: {
                      screen: AdventureScreen,
                    },
  },
  {
    initialRouteName: 'Category',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}





  const styles = StyleSheet.create ({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'},

 });



