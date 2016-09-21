import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
} from 'react-native';
import List from './app/components/list';

class MeetupAppTeamA extends Component {
  
  configureScene(route, routeStack) {
    if(route.type == 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProps} {...this.props} />
  }

  render() {
    return (
      <Navigator
        style={{flex:1, backgroundColor:'#2AB055'}}
        initialRoute={{ 
          component: List,
        }}
        renderScene={ this.renderScene.bind(this) }
        configureScene={ this.configureScene }
      /> 
    );
  }
}

AppRegistry.registerComponent('MeetupAppTeamA', () => MeetupAppTeamA);