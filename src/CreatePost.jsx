import React, { Component } from 'react';

export default class CreatePost extends Component {
  render() {
    return (
      <div className="CreatePost">
      <form className="inline" onSubmit={(e) => this.props.onChildSubmit(e)}>
          <label>
            Name:
            <input onChange={(e) => this.props.onChildChange(e)} type="text" name="name" />
          </label>
          <input type="submit" value="Submit" className="waves-effect waves-light btn white-text" />
        </form>

      </div>
    );
  }
}
