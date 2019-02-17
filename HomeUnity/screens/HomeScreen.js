import React, { Component } from 'react';
import { Alert, View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';

export default class HomeScreen extends React.Component {
	//goes to newUser page
	_newUser(){
		Alert.alert("Register!");
	}

	//goes to returnUser page
	_returnUser() {
		AppNavigator.navigate()
	}

	render() {
		return (
		<View style={{flex: 1, alignItems:'stretch'}}>
			<View style={styles.title_container}>
				<Text style={styles.title}>HomeUnity</Text>
			</View>

			<View style={styles.logo}>
				<Image source={require('../assets/logo.png')} />
			</View>

			<View style={styles.button_container}>
				<Button style={styles.button} onPress={() => this.props.navigation.navigate('Maps')} title='Start' />
				<Button style={styles.button} onPress={() => this.props.navigation.navigate('Reports')} title='Reports' />
			</View>
		</View>
		)
	}
};

const styles = StyleSheet.create({
	title_container: {
		flex: 0.5,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor: 'red', 
	},

	title: {
		//margin: 15,
		color: 'black',
		//fontWeight: 'bold',
		fontSize: 60,
		//backgroundColor: 'green',
	},

	logo: {
		width: 200,
		height: 200,
		justifyContent: 'center',
		alignSelf: 'center',
	},

	button: {
		height: 50
	},

	button_container: {
		position: 'absolute',
		justifyContent: 'center',
		width: 400,
		bottom: 10,
		left: 25,
		alignSelf: 'center',
	}
  }
);
