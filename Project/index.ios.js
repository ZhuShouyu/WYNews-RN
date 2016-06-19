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

import WYNewsMainPage from './App/Views/News/newsMainPage'

class WYNewsRN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTag: 'news'
    };
  }
  renderTabBarItem() {

  }
  render() {
    return (
      <TabBarIOS unselectedTintColor = 'gray' tintColor = 'red' barTintColor = 'white'>
        <TabBarIOS.Item
        selected = {this.state.selectedTag === 'news'}
        title = '新闻'
        icon = {require('./App/resources/images/night_tabbar_icon_news_normal.png')}
        onPress = {() => {
          this.setState({
            selectedTag: 'news'
          });
        }}
        >
          {this._renderNewsMainPage()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
        selected = {this.state.selectedTag === 'reader'}
        title = '阅读'
        icon = {require('./App/resources/images/night_tabbar_icon_reader_normal.png')}
        onPress = {() => {
          this.setState({
            selectedTag: 'reader'
          });
        }}
        >
          {this._renderReaderMainPage()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
        selected = {this.state.selectedTag === 'media'}
        title = '视频'
        icon = {require('./App/resources/images/night_tabbar_icon_media_normal.png')}
        onPress = {() => {
          this.setState({
            selectedTag: 'media'
          });
        }}
        >
          {this._renderMediaMainPage()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
        selected = {this.state.selectedTag === 'bar'}
        title = '话题'
        icon = {require('./App/resources/images/night_tabbar_icon_bar_normal.png')}
        onPress = {() => {
          this.setState({
            selectedTag: 'bar'
          });
        }}
        >
          {this._renderBarMainPage()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
        selected = {this.state.selectedTag === 'me'}
        title = '我'
        icon = {require('./App/resources/images/night_tabbar_icon_me_normal.png')}
        onPress = {() => {
          this.setState({
            selectedTag: 'me'
          });
        }}
        >
          {this._renderMeMainPage()}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
  _renderNewsMainPage() {
    return (
      <WYNewsMainPage>
      </WYNewsMainPage>
    )
  }
  _renderReaderMainPage() {
    return (
      <View style = {{flex: 1, backgroundColor: 'red'}}>
      </View>
    )
  }
  _renderMediaMainPage() {
    return (
      <View style = {{flex: 1, backgroundColor: 'red'}}>
      </View>
    )
  }
  _renderBarMainPage() {
    return (
      <View style = {{flex: 1, backgroundColor: 'red'}}>
      </View>
    )
  }
  _renderMeMainPage() {
    return (
      <View style = {{flex: 1, backgroundColor: 'red'}}>
      </View>
    )
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
