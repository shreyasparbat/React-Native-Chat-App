import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Platform,
} from 'react-native';

import Home from './src/components/Home'
import ChatRoomList from './src/components/ChatRoomList'
import Chat from './/src/components/Chat'

import {
  Router,
  Scene
} from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
          <Scene key='home' component={Home} title='Home'/>
          <Scene key='chatRoomList' component={ChatRoomList} title='ChatRoomList'/>
          <Scene key='chat' component={Chat} title='Chat'/>
        </Scene>
      </Router>
    );
  }
}
