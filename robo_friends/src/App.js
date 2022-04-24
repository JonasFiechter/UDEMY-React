import React, {Component} from 'react';
import CardList from './card_list';
import SearchBox from './search_box'
import { robots } from './robots.js'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            search_field: ''
        }
    }

    on_search_change = (event) => {
        this.setState({search_field: event.target.value})

    }

    render() {
        const filtered_robots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.search_field.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>Robo Friends</h1>
                <SearchBox search_change={this.on_search_change}/>
                <CardList robots={filtered_robots}/>
            </div>
        );
    };
};

export default App;