import React, { Component } from 'react';
import { Alert, View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import AppNavigator from './navigation/AppNavigator';
import MapScreen from './screens/MapScreen';
import HomeScreen from './screens/HomeScreen';
import ReportsScreen from './screens/ReportsScreen';

export const MainNavigator = createStackNavigator({
	Home: HomeScreen,
	Maps: MapScreen,
	Reports: ReportsScreen
},
{
	initialRouteName: "Home"
}); 

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
	render() {
		return (
			<AppContainer />
		);
	}
};
