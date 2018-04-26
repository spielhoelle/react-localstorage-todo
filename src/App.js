import React, { Component } from 'react';
import logo from './logo.svg';
import CreatePost from './CreatePost';
import './App.css';

class App extends Component {
  state = {
    form: {},
    items: []
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    var form = this.state.form;
    var items = this.state.items;

    items.push(form)
    this.setState({items})
  }
  onChange = (e) => {
    console.log(e.target.value);
    this.setState({form: e.target.value})
    console.log(this);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CreatePost onChildSubmit={this.onSubmit} onChildChange={this.onChange}/>
        {this.state.items.map(i => <div>{i}</div>)}
      </div>
    );
  }
}

export default App;
