/*import React from 'react';
import { Text, Platform, StatusBar, StyleSheet, View } from 'react-native';
//import { AppLoading, Asset, Font, Icon } from 'expo';
//import AppNavigator from '../navigation/AppNavigator';

export default class MapScreen extends React.Component {
	render() {
		return (
			<View>
				<Text> MapScreen </Text>
			</View>
		)
	}
}
*/

// #F6F: Hot pink
// #290: Green
// #A01: Red
// #32A: Blue
/*
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Callout, Text, TextInput, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import LocationService from '../components/LocationServ';

export default class MapScreen extends Component {
    state = {
        markers: []
    };

    debug_markers(lat, long, name, descr, color, num) {
        const marker = {
            coordinate: {latitude: lat, longitude: long},
            title: name,
            description: descr,
            pinColor: color
            //image: import('MSclippie.jpeg')
        }

        this.state.markers[num]=marker
    };

    instantiate() {
        {this.state.markers.map(marker => (
            <Marker
                coordinate={null}
                title={null}
                description={null}/>
        ))}
    }

    render() {
        //this.instantiate();
        this.debug_markers(32.803, -96.7699, "Dallas", "some description", '#32A', 0);
        this.debug_markers(32.614, -96.655, "Dallas2", "something1", '#F6F', 1);
        this.debug_markers(32.999, -96.899, "Dallas3", "something2", '#A01', 2);
        this.debug_markers(32.750, -96.530, "Dallas4", "something4", '#290'), 3;
        return (
			<View style={{flex:1}}>
			<LocationService style={{flex:0}} />
            <MapView style={{flex:1}}
                style={{flex:1}}
                initialRegion={{
                    latitude: 32.803,
                    longitude: -96.7699,
                    latitudeDelta: 1,
                    longitudeDelta: 1
                }}
                showsUserLocation={true}
                followUserLocation={true}
                showsMyLocationButton={true}
                showsCompass={true}
                showsScale={true}
                region={this.state.region}
                onRegionChange={this.onRegionChange}>

                {this.state.markers.map(marker => (
                    <Marker
                        coordinate={marker.coordinate}
                        title={marker.title}
                        description={marker.description}
                        pinColor={marker.pinColor}/>
                ))}
            </MapView>
			</View>
        );
    }

    new_marker(props) {

    }
};
*/
// #F6F: Hot pink
// #290: Green
// #A01: Red
// #32A: Blue

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Callout, Text, TextInput, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import LocationService from '../components/LocationServ';

export default class Map extends Component {
    state = {
        markers: []
    };

    data = {
        color: null,
        title: null,
        description: null,
        latitude: null,
        longitude: null
    };

    debug_markers(lat, long, name, descr, color, num) {
        const marker = {
            coordinate: {latitude: lat, longitude: long},
            title: name,
            description: descr,
            pinColor: color
            //image: import('MSclippie.jpeg')
        }

        this.state.markers[num]=marker
    };

    color_code(color) {
        if (color == "pink") {
            return('#F6F');
        }
        else if (color == "green") {
            return('#290');
        }
        else if (color == "red") {
            return('#A01');
        }
        else {
            return('#32A');
        }
    };

    instantiate() {
        {this.state.markers.map(marker => (
            <Marker
                coordinate={null}
                title={null}
                description={null}/>
        ))}
    }

    sample_data() {
        this.debug_markers(32.760276, -96.799543, "Weather", "Flood", this.color_code("blue"), 0);
        this.debug_markers(32.786636, -96.806976, "Events", "Job Fair", this.color_code("pink"), 1);
        this.debug_markers(32.814032, -96.837668, "Food", "Salvation Army Italian Night", this.color_code("green"), 2);
        this.debug_markers(32.77705, -96.7931, "Crime", "Assault", this.color_code("red"), 3);
        this.debug_markers(32.76765, -96.7866, "Crime", "Sexual Assault", this.color_code("red"), 4);
        this.debug_markers(32.78115, -96.7823, "Crime", "Shooting", this.color_code("red"), 5);
        this.debug_markers(32.77932, -96.7764, "Crime", "Grand Theft Auto", this.color_code("red"), 6);
    }

    render() {
        //this.instantiate();
        this.sample_data();
        return (
			<View style={{flex:1}}>
			<LocationService style={{flex:0}} />
            <MapView 
                style={{flex:1}}
                initialRegion={{
                    latitude: 32.803,
                    longitude: -96.7699,
                    latitudeDelta: 1,
                    longitudeDelta: 1
                }}
                showsUserLocation={true}
                followUserLocation={true}
                showsMyLocationButton={true}
                showsCompass={true}
                showsScale={true}
                region={this.state.region}
                onRegionChange={this.onRegionChange}>

                {this.state.markers.map(marker => (
                    <Marker
                        coordinate={marker.coordinate}
                        title={marker.title}
                        description={marker.description}
                        pinColor={marker.pinColor}/>
                ))}
            </MapView>
			</View>
        );
    }

    new_marker(props) {

    }
};
