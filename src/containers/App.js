import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './searchBox';
import {robots} from './robots';
import Scroll from './scroll';
import './App'

class App extends Component {
	constructor() {
	super()
	this.state = {
	robots: [] ,
	searchfield: ''
	} 
	console.log('constructor');
  }

  componentDidMount() {
  	fetch('https://jsonplaceholder.typicode.com/users')
  	.then(response => response.json())
  	.then(users => this.setState({ robots: robots }));
      }

  onSearchChange = (event) => {
  	this.setState({ searchfield: event.target.value})	
  }
 

  render() { 
  	const filteredRobots = this.state.robots.filter(robots => {
  		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  	})
  	if (this.state.robots.length === 0) {
  		return <h1> Loading</h1> 
  	} else { 
  		console.log('render');
	 return (
		<div className='tc'>
		<h1> RoboFriends </h1> 
		<SearchBox searchChange={this.onSearchChange} />
		<Scroll>
		<CardList robots={filteredRobots} />
		</Scroll>
		</div> 

	);
}}
}
export default App;