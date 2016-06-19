'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';
import WYNewsList from './newsList'

class WYNewsMainPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <NavigatorIOS style = {{flex: 1}} initialRoute = {
        {
          title: '网易新闻',
          component: WYNewsList,
          barTintColor: 'red',
          tintColor: 'white',
          leftButtonIcon: require('../../resources/images/nav_live_room_image.png'),
          onLeftButtonPress: () => {

          },
          rightButtonIcon: require('../../resources/images/search_icon_highlighted.png'),
          onRightButtonPress: () => {

          }
        }
        // renderHeader = { (route) => <Image source = {require('../../resources/images/home_header_logo.png') title = {route.title}/>}}
      }/>
    )
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    }
  }
);

module.exports = WYNewsMainPage;
