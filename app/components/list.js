import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Event from './event';

const dummyData = [{"created":1472647157000,"duration":16200000,"id":"233763008","name":"React Native HackNight","status":"upcoming","time":1474471800000,"updated":1474394623000,"utc_offset":7200000,"waitlist_count":0,"yes_rsvp_count":27,"venue":{"id":24758572,"name":"Leo Innovation Lab","lat":55.67886734008789,"lon":12.577825546264648,"repinned":false,"address_1":"Niels Hemmingsens Gade 1","city":"Copenhagen","country":"dk","localized_country_name":"Denmark"},"group":{"created":1462340695000,"name":"React Native CPH","id":19914310,"join_mode":"open","lat":55.68000030517578,"lon":12.569999694824219,"urlname":"React-Native-CPH","who":"Members"},"link":"http://www.meetup.com/React-Native-CPH/events/233763008/","description":"<p>This time we will get our hands dirty (and happy!) with React Native. Everyone bring your computers and lets form teams to see what we can create in just one night :-)</p> <p>It is best if everyone has at least some minimum experience with running a Hello World React Native app or similar, check out these ressources to get started:</p> <p>Setup: <a href=\"https://facebook.github.io/react-native/docs/getting-started.html#content\"><a href=\"https://facebook.github.io/react-native/docs/getting-started.html#content\" class=\"linkified\">https://facebook.github.io/react-native/docs/getting-started.html#content</a></a><br/>Hello World: <a href=\"https://facebook.github.io/react-native/docs/tutorial.html\"><a href=\"https://facebook.github.io/react-native/docs/tutorial.html\" class=\"linkified\">https://facebook.github.io/react-native/docs/tutorial.html</a></a></p> <p>We will be working in teams building an RSVP app with the Meetup.com API. Read more about it here: <a href=\"https://pmadruga.github.io/rncph/\"><a href=\"https://pmadruga.github.io/rncph/\" class=\"linkified\">https://pmadruga.github.io/rncph/</a></a></p> <p>See you on September 21st!</p> ","visibility":"public"},{"created":1472647157000,"duration":16200000,"id":"233763008","name":"React Native HackNight","status":"upcoming","time":1474471800000,"updated":1474394623000,"utc_offset":7200000,"waitlist_count":0,"yes_rsvp_count":27,"venue":{"id":24758572,"name":"Leo Innovation Lab","lat":55.67886734008789,"lon":12.577825546264648,"repinned":false,"address_1":"Niels Hemmingsens Gade 1","city":"Copenhagen","country":"dk","localized_country_name":"Denmark"},"group":{"created":1462340695000,"name":"React Native CPH","id":19914310,"join_mode":"open","lat":55.68000030517578,"lon":12.569999694824219,"urlname":"React-Native-CPH","who":"Members"},"link":"http://www.meetup.com/React-Native-CPH/events/233763008/","description":"<p>This time we will get our hands dirty (and happy!) with React Native. Everyone bring your computers and lets form teams to see what we can create in just one night :-)</p> <p>It is best if everyone has at least some minimum experience with running a Hello World React Native app or similar, check out these ressources to get started:</p> <p>Setup: <a href=\"https://facebook.github.io/react-native/docs/getting-started.html#content\"><a href=\"https://facebook.github.io/react-native/docs/getting-started.html#content\" class=\"linkified\">https://facebook.github.io/react-native/docs/getting-started.html#content</a></a><br/>Hello World: <a href=\"https://facebook.github.io/react-native/docs/tutorial.html\"><a href=\"https://facebook.github.io/react-native/docs/tutorial.html\" class=\"linkified\">https://facebook.github.io/react-native/docs/tutorial.html</a></a></p> <p>We will be working in teams building an RSVP app with the Meetup.com API. Read more about it here: <a href=\"https://pmadruga.github.io/rncph/\"><a href=\"https://pmadruga.github.io/rncph/\" class=\"linkified\">https://pmadruga.github.io/rncph/</a></a></p> <p>See you on September 21st!</p> ","visibility":"public"}];

class List extends Component {
	
	constructor(props) {
		super(props);

		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(dummyData),
		}
	}

	navigateToEvent(eventId) {
		this.props.navigator.push({
      component: Event,
      passProps: {
        eventId: eventId,
      },
    });
	}

  renderRow(rowData) {
    const date = new Date(rowData.time);
    return (
      <TouchableOpacity
				onPress={() => this.navigateToEvent(rowData.id)}
				style={{marginBottom:10, borderBottomWidth:1, borderBottomColor:'#ccc', paddingVertical:10,}}
      >
	      <View style={{flex:1, justifyContent: 'center', alignItems: 'center', flexDirection:'row'}}>
	        <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
		        <Text style={{fontSize:10,}}>{date.toString()}</Text>
		        <Text style={{fontSize:18,}}>{rowData.name}</Text>
		        <Text>{rowData.venue.name}</Text>	        	
	        </View>
	        <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
	        	<Text>{rowData.yes_rsvp_count.toString() + ' attendees'}</Text>
	        </View>
	      </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView 
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:70,
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

export default List;

//