import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

export default class LocationService extends Component {
	constructor() {
		super();

		this.state = {
			dataID: 78921,
			latitude: 0,
			longitude: 0,
		};

		this.findCoordinates = this.findCoordinates.bind(this);
		//this.timer = this.timer.bind(this);
	}

    componentWillMount() {
        // configure database connection
		var config = {
			apiKey: "AIzaSyDr94kuG57g0VejSoxnIYgH6RErZznfQoc",
			authDomain: "south-asian-army.firebaseapp.com",
			databaseURL: "https://south-asian-army.firebaseio.com",
			projectId: "south-asian-army",
			storageBucket: "south-asian-army.appspot.com",
			messagingSenderId: "36295341067"
		};
		firebase.initializeApp(config);
	}

    findCoordinates = () => {
		setTimeout(() => {
		navigator.geolocation.getCurrentPosition(
			position => {
				const latitude = parseFloat(JSON.stringify(position.coords.latitude), 10);
				const longitude = parseFloat(JSON.stringify(position.coords.longitude), 10);
				this.setState({
					dataID: this.state.dataID,
					latitude,
					longitude,
				});
			}
		)}, 100)
    };

    updateDatabaseCoordinates = () => {
         firebase.database().ref('HomelessUsers/Venkata').set({
			dataID: this.state.dataID,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
         }).catch(error => {
            console.log(error);
         });
    };

	/*timer = () => {
		setTimeout(() => {
			this.setState({time : this.state.time + 1});
		}, 1000);
	}

	updateDatabaseTime = () => {
		firebase.database().ref('Time').set(this.state.time).catch(error => {console.log(error)});
	}*/

    render() {
        this.findCoordinates();
        this.updateDatabaseCoordinates();
		/*this.timer();
		this.updateDatabaseTime();*/
        return (
            <View style={styles.container}>
                <Text style={{color:'red'}}>Latitude: {this.state.latitude}</Text>
                <Text style={{color:'blue'}}>Longitude: {this.state.longitude}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    textProp: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});
