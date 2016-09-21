const key = '131d36e345f757e7512747e20176e4b'; 

export const fetchAll = () => { 
	return new Promise(function(resolve,reject) {
		fetch("https://api.meetup.com/react-native-cph/events?member_id=self&key="+ key, {method: "GET"}) 
		.then((response) => response.json()) 
		.then((responseData) => {  
			resolve(responseData);
		})	
	});
}

export const fetchOne = (id) => { 
	return new Promise(function(resolve,reject) {
		fetch("https://api.meetup.com/react-native-cph/events/"+ id +"?member_id=self&key="+ key, {method: "GET"}) 
		.then((response) => response.json()) 
		.then((responseData) => {  
			resolve(responseData);
		})	
	});
}

export const fetchRSVPs = (id) => { 
	return new Promise(function(resolve,reject) {
		fetch("https://api.meetup.com/react-native-cph/events/"+ id +"/rsvp?key="+ key, {method: "GET"}) 
		.then((response) => response.json()) 
		.then((responseData) => {  
			resolve(responseData);
		})	
	});
}