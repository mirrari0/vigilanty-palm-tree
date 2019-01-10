import React, {Component} from 'react';
import './App.css';
import { playgameRemoteInline} from "./FizzBuzzCalculator";

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input: '1',
            output:''
        }
    }

    render() {
        return (
            <div className="App">
                <br/>
                <input id={'userInput'} type={'number'} onChange={
                    (event)=> {
                        this.setState({input : event.target.value});
                    }
                }/>
                <br/>
                <button id={'submit'} onClick={
                     async ()=>{
                       await this.submitHandler();
                    }
                }>Submit</button>
                <br/>
                <label id={'output'}>{ this.state.output }</label>
            </div>
        );
    }

    async submitHandler() {
        this.setState({output: 'loading'});
        this.setState({output: await playgameRemoteInline(this.state.input)});

    }

}

export default App;
