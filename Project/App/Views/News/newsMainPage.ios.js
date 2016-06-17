import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';
class WYNewsMainPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <NavigatorIOS>

      </NavigatorIOS>
    )
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    }
  }
)

module.exports = WYNewsMainPage;
