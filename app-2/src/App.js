import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: ['groceries', 'dog groomers', 'get job', 'get paid', 'go to Disneyland']
    }
  }

  render(){
    let listDisplay = this.state.list.map((e,i)=> {
      return <h2 key={i}>{e}</h2>
    })
    return (
      <div className="App">{listDisplay}
    </div>
  );
 }
}

export default App;
