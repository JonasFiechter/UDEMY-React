import react from 'react';
import CardList from './card_list';
import SearchBox from './search_box'
import { robots } from './robots.js'

const App = () => {
    return (
        <div className='tc'>
            <h1>Robo Friends</h1>
            <SearchBox/>
            <CardList robots={robots}/>
        </div>
    );
};

export default App;