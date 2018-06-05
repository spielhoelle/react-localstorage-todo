import React from 'react';
import CreatePost from './CreatePost';
import './App.css';

export default class App extends React.Component {
  state = {
    form: {},
    items: JSON.parse(localStorage.getItem("todos")) || []
  }
  handleDelete = (e, clickedItem) => {
    console.log(e, clickedItem);
    let items = [...this.state.items];
    items.splice(items.findIndex(i => i.name === clickedItem.name), 1)
    this.setState({items})
    localStorage.setItem("todos", JSON.stringify(items))
  }
  onSubmit = e => {
    e.preventDefault();
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
      <div className="container">
        <CreatePost onChildSubmit={this.onSubmit} onChildChange={this.onChange}/>
        <ul>
          {this.state.items.map(i => <div className="row"><button className="waves-effect waves-light btn white-text" onClick={(e) => this.handleDelete(e, i)}>x</button> Name: <i>{i.name}</i> |  created: <i>{i.createdat}</i> </div>)}
        </ul>
      </div>
    );
  }
}
