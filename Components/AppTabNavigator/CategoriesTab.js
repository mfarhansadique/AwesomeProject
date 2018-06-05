import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  WebView,
  HTML,
  Header,
  Body
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class CategoryTab extends React.Component {
static navigationOptions = {
title: 'Categories',};
  render() {
    return (
      <View style={{ flex: 2,  justifyContent: 'center' }}>


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
static navigationOptions = {
title: 'Action',};
    render() {
      return (
        <WebView
          source={{uri: 'http://mangasupa.com/manga_list?type=latest&category=2&state=all&page=1'}}
          style={{marginTop: 20}}
        />
      );
    }
  }

class MysteryScreen extends React.Component {
static navigationOptions = {
title: 'Mystery',};
    render() {
      return (
        <WebView
          source={{uri: 'http://mangasupa.com/manga_list?type=latest&category=24&state=all&page=1'}}
          style={{marginTop: 20}}
        />
      );
    }
  }

  class ComedyScreen extends React.Component {
  static navigationOptions = {
  title: 'Comedy',};
      render() {
        return (
          <WebView
            source={{uri: 'http://mangasupa.com/manga_list?type=latest&category=6&state=all&page=1'}}
            style={{marginTop: 20}}
          />
        );
      }
    }

    class FantasyScreen extends React.Component {
    static navigationOptions = {
    title: 'Fantasy',};
        render() {
          return (
            <WebView
              source={{uri: 'http://mangasupa.com/manga_list?type=latest&category=12&state=all&page=1'}}
              style={{marginTop: 20}}
            />
          );
        }
      }

      class AdventureScreen extends React.Component {
      static navigationOptions = {
      title: 'Adventure',};
          render() {
            return (
              <WebView
                source={{uri: 'http://mangasupa.com/manga_list?type=latest&category=4&state=all&page=1'}}
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
        Comedy: {
              screen: ComedyScreen,
            },
             Fantasy: {
                  screen: FantasyScreen,
                },
                Adventure: {
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



