import React, {Component} from 'react';
import './App.css';

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
        await this.callItLiterallyAnythingElse();

    }


    async callItLiterallyAnythingElse() {
        if(this.state.input === '') return '';
        try {
            const response = await fetch('https://sf5oz1x80a.execute-api.us-west-1.amazonaws.com/api/fizzbuzz/' + parseInt(this.state.input),
                );

            const json = await response.json();
            this.setState({output: await this.parseJsonIntoValue(json)})
        }
        catch (e) {
            console.log("caught exception", e);
        }
    }


    parseJsonIntoValue(json) {
        return json.result;
    }

}

export default App;
