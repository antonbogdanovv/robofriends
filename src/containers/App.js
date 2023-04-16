import React, {Component} from 'react';
import CardList from '../componens/CardList';
import SearchBox from '../componens/SearchBox';
import Scroll from '../componens/Scroll';
// import ErrorBoundry from '../componens/ErrorBoundry';
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(responce => responce.json())
			.then(users => {this.setState({ robots: users })});
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if (robots.lenght) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>Robofriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
					{/*need to wrap CardList into <ErrorBoundry> to work*/}
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;
