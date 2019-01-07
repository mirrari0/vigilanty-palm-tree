import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
                        var value = '';
                        switch (true) {
                            case this.state.input === 0 || this.state.input === '':
                                value = this.state.input;
                                break;
                            case this.state.input % 15 === 0:
                                value = 'fizzbuzz';
                                break;
                            case this.state.input % 3 === 0:
                                value = 'fizz';
                                break;
                            case this.state.input % 5 === 0:
                                value = 'buzz';
                                break;
                            default: value = this.state.input;

                        }

                        this.setState({output: value});
                    }
                }>Submit</button>
                <label id={'output'}>{ this.state.output }</label>
            </div>
        );
    }
}

export default App;
