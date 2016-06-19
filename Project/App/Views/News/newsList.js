import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

class WYNewsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adsList: [],
      currentAdsIndex: 0,
    }
  }
  componentDidMount() {
    fetch('http://c.3g.163.com/nc/article/headline/T1348647853363/0-20.html', {
      method: 'POST',
      body: JSON.stringify({
        from: 'toutiao',
        fn: '3',
        prog: 'LTitleA',
        passport: '',
        devId: '4+hCl5lG+3cspn4JUaW0WqK6k14hwrDxBBSxZ5OisPunfBZVjD28AIFkJalNb7T1',
        size: '20',
        version: '10.0',
        spever: false,
        net: 'wifi',
        ts: '1466341664',
        sign: '5mxzRshEVYu5sAP5YUT/SYYijyjTDOVh7M8vB/8Obex48ErR02zJ6/KXOnxX046I',
        encryption: '1',
        canal: 'appstore'
      })
    }).then((responce) => responce.json()).then((jsonValue) => {
      console.log('数据列表:' + JSON.stringify(jsonValue));
      var adsList = jsonValue.T1348647853363[0].ads;
      this.setState({
        adsList: adsList
      });
    });
  }
  adsListScroll(event) {
    var offsetX = event.nativeEvent.contentOffset.x;
    console.log('x:' + offsetX + ' else:' + Dimensions.get('window').width + 'index:' + offsetX / Dimensions.get('window').width);
    this.setState({
      currentAdsIndex: offsetX / Dimensions.get('window').width
    });
    console.log('index:' + this.state.currentAdsIndex);
  }
  render() {
    return(
      <View style = {styles.container}>
        <View style = {styles.adsMainView}>
          <ScrollView onScroll = {this.adsListScroll.bind(this)} onScrollAnimationEnd = {(item) => {
            console.logo('hi:' + item)
          }} scrollEventThrottle = {10} style = {styles.topAds} horizontal = {true} pagingEnabled = {true} showsHorizontalScrollIndicator = {false}>
            {this.state.adsList.map(createThumbRow)}
          </ScrollView>
          <View style = {styles.adsTitleView}>
            <Text style = {[styles.adsTitle, {width: Dimensions.get('window').width * 0.8, flex: 0.8}]}>
              {this.state.currentAdsIndex < this.state.adsList.length ? this.state.adsList[this.state.currentAdsIndex].title : ''}
            </Text>
            <View style = {styles.adsIndicators}>
              {this.state.adsList.map((adsInfo, i) => <View key = {i} style = {[styles.adsIndicator, this.state.currentAdsIndex == i ? styles.adsIndicatorSelected : styles.adsIndicatorNormal]}/>)}
            </View>
          </View>
        </View>
        <View>
          <Text>

          </Text>
        </View>
      </View>
    )
  }
}

export default class HorizontalPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return(
      <View style={[styles.button]}>
        <Image style={[styles.img, {width: Dimensions.get('window').width}]} source = {{uri: this.props.uri}} />
      </View>
    )
  }
}

var createThumbRow = (adsInfo, i) => <HorizontalPage key={i} uri={adsInfo.imgsrc} />;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  topAds: {

  },
  adsMainView: {
    marginTop: 40,
    height: 260,
    flex: 1,
    backgroundColor: 'white'
  },
  adsTitleView: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    bottom: 110,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  adsIndicators: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  adsIndicator: {
    backgroundColor: 'white',
    margin: 2,
  },
  adsIndicatorNormal: {
    borderRadius: 3,
    height: 6,
    width: 6,
  },
  adsIndicatorSelected: {
    borderRadius: 5,
    height: 10,
    width: 10,
  },
  adsTitle: {
    marginLeft: 10,

    color: 'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#eaeaea',
  },
  img: {
    // width: 64,
    height: 128,
  }
});

module.exports = WYNewsList
