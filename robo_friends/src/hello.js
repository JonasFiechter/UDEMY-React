import { Component } from "react";
import './App.css'
import 'tachyons'

class Hello extends Component {
    render () {
        return (
            <div className="f1 tc">
                <h1>Hello World!</h1>
                <p>Welcome to my first react app</p>
            </div>
        );
    }
}

export default Hello;