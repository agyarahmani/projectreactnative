import React, {Component} from 'React';
import {Text} from 'react-native';

class Judul extends Component {
	render(){
		return (
			<Text style={salon.Judul}>BIODATA</Text>
			)
	}
}
const salon = {
	Judul: {
		color: '#f00',
		fontSize: 50,
		fontWeight: 'bold',
		backgroundColor: '#0f0',
	}
}
export default Judul;