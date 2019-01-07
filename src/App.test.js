import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme';

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

it('should update output with number if the input number is not a multiple of 3 or 5', function () {
    app.find('#userInput').simulate('change', { target : { value : 17}});
    app.find('#submit').simulate('click');
    app.update();

    expect(app.find('#output').text()).toEqual('17');
});

it('should update output with fizz if the input number is a multiple 3 but not 5', function () {
    app.find('#userInput').simulate('change', { target : { value : 12}});
    app.find('#submit').simulate('click');
    app.update();

    expect(app.find('#output').text()).toEqual('fizz');
});

it('should update output with buzz if the input number is a multiple 5 but not 3', function () {
    app.find('#userInput').simulate('change', { target : { value : 10}});
    app.find('#submit').simulate('click');
    app.update();

    expect(app.find('#output').text()).toEqual('buzz');
});

it('should update output with fizzbuzz if the input number is a multiple 5 and 3', function () {
    app.find('#userInput').simulate('change', { target : { value : 15}});
    app.find('#submit').simulate('click');
    app.update();

    expect(app.find('#output').text()).toEqual('fizzbuzz');
});

it('should update output with zero if the input number is a zero', function () {
    app.find('#userInput').simulate('change', { target : { value : 0}});
    app.find('#submit').simulate('click');
    app.update();

    expect(app.find('#output').text()).toEqual('0');
});

it('should update output with undefined if the input number is undefined', function () {
    app.find('#userInput').simulate('change', { target : { value : ''}});
    app.find('#submit').simulate('click');
    app.update();

    expect(app.find('#output').text()).toEqual('');
});