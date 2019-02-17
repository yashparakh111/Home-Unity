import React from 'react';
import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
//import { ExpoLinksView } from '@expo/samples';


export default class ReportsScreen extends React.Component {
	constructor() {
		super()
		this.state = {text: ''};
	}
	
	render() {
		return(
		<View style = {{flex:1 }}>
			<View style={{ flex:0.9, alignItems: 'center', paddingTop: 10}}>
			<Text style = {{fontSize: 48}}>
				Report
			</Text>
			<TextInput
				style={{alignSelf: 'flex-start', height:40, fontSize: 35, paddingTop: 10}}
				placeholder="Enter your report"
				onChangeText={text => this.setState({text})}
			/>
			</View>
			<View style={{flex:0.1, position:'absolute', bottom:10, left: 30, width:400}}>
			<Button style={{alignSelf: 'flex-end'}} onPress={() => {this.setState({text: ''})}} title='Submit' />
			</View>
		</View>
		)
	}
}
