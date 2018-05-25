import React, { Component } from 'react';
import { WebView } from 'react-native';

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
export default ActionScreen;