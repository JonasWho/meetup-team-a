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
  Dimensions,
} from 'react-native';
import { fetchAll, fetchOne, fetchRSVPs } from '../data/fetcher';

const { width, height } = Dimensions.get('window');

class Event extends Component {
	
	constructor(props) {
		super(props);

    this.state = {
      event: null,
      eventDate: null,
      rsvps: [],
    }
	}

  componentDidMount() {
    // fetch data about meetup from API instead of dummyData
    // this.props.eventId
    fetchOne(this.props.eventId).then((data) => {
      
      console.log(data);

      this.setState({
        event: data,
        eventDate: new Date(data.time),
      })

      fetchRSVPs(this.props.eventId).then((rsvpdata) => {
        console.log(rsvpdata)
        this.setState({
          rsvps: rsvpdata,
        })
      });
    });


  }

  render() {
    const { event, eventDate, rsvps } = this.state;

    if(!event || !event.venue) {
      return (
        <View style={styles.container}><Text>fetching...</Text></View>
      );
    }
    else {

      return (  
        <View style={styles.container}>
          <View style={{marginBottom:20}}>
            <Text style={{fontSize:18,}}>{event.name}</Text>
            <Text style={{fontSize:10,}}>{eventDate.toString()}</Text>
          </View>
          <View style={{flex:1,marginBottom:20, padding:5, backgroundColor: 'rgba(255,0,0,0.1)'}}>
            <Text>  
              Venue: {'\n' + event.venue.name + '\n' + event.venue.address_1 + ', ' + event.venue.city}
            </Text>
          </View>
          <View style={{marginBottom:20}}>
            <Text>{event.yes_rsvp_count.toString() + ' attendees'}</Text>
            {
              rsvps.map(r => {
                return <Text>{r.member.name}</Text>
              })
            }
          </View>
          <View style={{flex:1,marginBottom:20}}>
            <Text>{event.description}</Text>
          </View>
        </View>
      );

    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    marginTop:70,
    paddingHorizontal:20,
    paddingVertical:20,
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

export default Event;

//