import React, {Component} from 'react';
import './App.css';
import { playgame } from './FizzBuzzCalculator';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input: '',
            output:''
        }
    }

    render() {
        return (
            <div className="App">
                <input id={'userInput'} type={'number'} onChange={
                    (event)=> {
                        this.setState({input : event.target.value});
                    }
                }/>
                <button id={'submit'} onClick={
                    ()=>{
                        this.setState({output: playgame(this.state.input)});
                    }
                }>Submit</button>
                <label id={'output'}>{ this.state.output }</label>
            </div>
        );
    }


}

export default App;
