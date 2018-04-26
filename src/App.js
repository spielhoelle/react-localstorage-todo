import React from 'react';
import logo from './logo.svg';
import CreatePost from './CreatePost';
import './App.css';

export default class App extends React.Component {
  state = {
    form: {},
    items: JSON.parse(localStorage.getItem("todos")) || []
  }
  onSubmit = e => {
    e.preventDefault();
    console.log(e);
    var form = this.state.form;
    var items = this.state.items;

    var itemObj = {
      name: this.state.form, 
      state: false, 
      createdat: Date.now()
    }
    items.push(itemObj)
    this.setState({items})
    localStorage.setItem("todos", JSON.stringify(items))
  }
  onChange = e => {
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
        <ul>
          {this.state.items.map(i => <li>Name: <i>{i.name}</i> |  created: <i>{i.createdat}</i></li>)}
        </ul>
      </div>
    );
  }
}
