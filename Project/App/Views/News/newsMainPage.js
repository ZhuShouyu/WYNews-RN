'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
} from 'react-native';

import WYNewsList from './newsList'

class WYNewsMainPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const routeMapper = {
      Title: (route, navigator, index, navState) => {
        if (0 == index) {
          return(
            <View style = {styles.title}>
              <Image source = {require('../../resources/images/navbar_netease.png')}/>
            </View>
          )
        } else {
          return(
            <View style={styles.title}>
              <Text style={styles.buttonText}>{route.title ? route.title : ''}</Text>
            </View>
          )
        }
      },
      LeftButton: (route, navigator, index, navState) => {
        if (index === 0) {
          return (
            <TouchableOpacity style = {styles.button} onPress = {() => {

            }}>
              <Image source = {require('../../resources/images/nav_live_room_image.png')} />
            </TouchableOpacity>
          )
        } else {
          return (
            <TouchableOpacity style = {styles.button} onPress = {() => {
              navigator.pop();
            }}>
              <Image source = {require('../../resources/images/home_back_normal.png')} />
            </TouchableOpacity>
          )

        }
      },
      RightButton: (route, navigator, index, navState) => {
        if (0 == index) {
          return(
            <TouchableOpacity style = {styles.button} onPress = {() => {

            }}>
              <Image source = {require('../../resources/images/search_icon_highlighted.png')} />
            </TouchableOpacity>
          )
        }
        if (route.rightElement) {
          return route.rightElement
        }
      }
    }
    return(
      <Navigator style = {{flex: 1}} initialRoute = {{name: '网易新闻', index: 0}}
      renderScene = { (route, navigator) =>
        <WYNewsList name = '网易新闻' title = {'Helloworld'} navigator = {navigator}/>
      }
      navigationBar = {<Navigator.NavigationBar style={{
        alignItems: 'center',
        backgroundColor: '#FF0000',
        shadowOffset:{
            width: 1,
            height: 0.5,
        },
        shadowColor: '#55ACEE',
        shadowOpacity: 0.8,
        }} routeMapper = {routeMapper}/>}/>
    )
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },
    title: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
      },
      button: {
        flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
      },
      buttonText: {
        fontSize: 18, color: '#FFFFFF', fontWeight: '400'
      }
  }
);

module.exports = WYNewsMainPage;
