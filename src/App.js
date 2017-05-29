import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className='wrapp'>
        <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        <div>{this.state.value}</div>
      </div>
    );
  }
}

export default App;
