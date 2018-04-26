import React, { Component } from 'react';

export default class CreatePost extends Component {
  render() {
    return (
      <div className="CreatePost">
      <form onSubmit={(e) => this.props.onChildSubmit(e)}>
          <label>
            Name:
            <input onChange={(e) => this.props.onChildChange(e)} type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}
