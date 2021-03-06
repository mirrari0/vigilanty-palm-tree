import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme';


describe('Page Elements', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    var app;

    beforeEach(() => {
        app = mount(<App/>);
    });

    it('should display a submit button', () => {
        let button = app.find('#submit');
        expect(button.type()).toEqual('button');
        expect(button.text()).toEqual('Submit');
    });

    it('should display an empty input', () => {
        let input = app.find('#userInput');
        expect(input.type()).toEqual('input');
        expect(input.text()).toEqual('');
        expect(input.prop('type')).toEqual('number');
    });

    it('should display an empty input', () => {
        let output = app.find('#output');
        expect(output.type()).toEqual('label');
        expect(output.text()).toEqual('');
    });

});

describe('FizzBuzz Logic', () => {
    var app;

    beforeEach(() => {
        app = mount(<App/>);
    });


    it('should update output with number if the input number is not a multiple of 3 or 5', async () => {
        app.find('#userInput').simulate('change', {target: {value: 17}});
        app.update();

        await app.instance().submitHandler();
        expect(app.find('#output').text()).toEqual('17');
    });

    it('should update output with fizz if the input number is a multiple 3 but not 5', async () => {
        app.find('#userInput').simulate('change', {target: {value: 12}});
        app.update();

        await app.instance().submitHandler();

        expect(app.find('#output').text()).toEqual('fizz');
    });

    it('should update output with buzz if the input number is a multiple 5 but not 3', async () => {
        app.find('#userInput').simulate('change', {target: {value: 10}});
        app.update();

        await app.instance().submitHandler();
        expect(app.find('#output').text()).toEqual('buzz');
    });

    it('should update output with fizzbuzz if the input number is a multiple 5 and 3', async () => {
        let amount = Math.ceil((Math.random() + .001) * 100) * 15;
        app.find('#userInput').simulate('change', {target: {value: amount}});
        app.update();

        await app.instance().submitHandler();

        expect(app.find('#output').text()).toEqual('fizzbuzz');
    });

    it('should update output with zero if the input number is a zero', async () => {
        app.find('#userInput').simulate('change', {target: {value: 0}});
        app.update();

        await app.instance().submitHandler();
        expect(app.find('#output').text()).toEqual('0');
    });

    it('should update output with undefined if the input number is undefined', async () => {
        app.find('#userInput').simulate('change', {target: {value: ''}});
        app.update();

        await app.instance().submitHandler();
        expect(app.find('#output').text()).toEqual('');
    });
});


describe('E2E Functional Tests', () => {
    var app;

    beforeEach(() => {
        app = mount(<App/>);
    });

    it('When given a number 3, clicking submit, displays the output fizz correctly to the page', (done) => {
        app.find('#userInput').simulate('change', {target: {value: '3'}});
        app.find('#submit').simulate('click');
        app.update();
        checkOutputE2E('fizz', done, app);
    });


    it('When given a number 5, clicking submit, displays the output buzz correctly to the page', (done) => {
        app.find('#userInput').simulate('change', {target: {value: '5'}});
        app.find('#submit').simulate('click');
        app.update();
        checkOutputE2E('buzz', done, app);
    });


    it('When given a number 15, clicking submit, displays the output fizzbuzz correctly to the page', (done) => {
        app.find('#userInput').simulate('change', {target: {value: '15'}});
        app.find('#submit').simulate('click');
        app.update();
        checkOutputE2E('fizzbuzz', done, app);
    });


    it('When given a number 17, clicking submit, displays the output 17 correctly to the page', (done) => {
        app.find('#userInput').simulate('change', {target: {value: '17'}});
        app.find('#submit').simulate('click');
        app.update();
        checkOutputE2E('17', done, app);
    });

});



function checkOutputE2E(expectedValue, done, app){
    setInterval(() => {
        app.update();
        const text = app.find('#output').text();
        if (text === expectedValue) {
            done();
        }
        else if (text !== "" && text !== "loading") {
            done.fail(`Result was ${text} but expected ${expectedValue}`);
        }
    }, 10);
};