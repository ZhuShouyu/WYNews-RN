/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native';

class WYNewsRN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [{
        title: '新闻',
        icon: require('./App/resources/night_tabbar_icon_news_normal.png'),
        highlight: 'night_tabbar_icon_news_normal',
        tag: 'news'
      },
      {
        title: '阅读',
        icon: require('./App/resources/night_tabbar_icon_reader_normal.png'),
        highlight: 'night_tabbar_icon_news_normal',
        tag: 'reading'
      },
      {
        title: '视频',
        icon: require('./App/resources/night_tabbar_icon_media_normal.png'),
        highlight: 'night_tabbar_icon_news_normal',
        tag: 'media'
      },
      {
        title: '话题',
        icon: require('./App/resources/night_tabbar_icon_bar_normal.png'),
        highlight: 'night_tabbar_icon_news_normal',
        tag: 'bar'
      },
      {
        title: '我',
        icon: require('./App/resources/night_tabbar_icon_me_normal.png'),
        highlight: 'night_tabbar_icon_news_normal',
        tag: 'me'
      }],
      selectedTag: 'news'
    };
  }
  render() {
    var items = this.state.menuItems.map((itemValue) => {
      return (
        <TabBarIOS.Item
        key = {itemValue.tag}
        title = {itemValue.title}
        icon = {itemValue.icon}
        >
        </TabBarIOS.Item>
      )
    });
    return (
      <TabBarIOS
      unselectedTintColor = 'gray'
      tintColor = 'red'
      barTintColor = 'white'>
      {items}
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WYNewsRN', () => WYNewsRN);
