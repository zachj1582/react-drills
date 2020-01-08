import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component{
  constructor(){
    super()
    this.state = {
      userInput: '',
      list: ''
    }
  }

  handleChange(val){
    this.setState({userInput: val})
  }

  handleClick(userInput){
    this.setState({list: userInput})
  }

  render(){
  return (
    <div className="App">
      <h4>My to-do list:</h4>
      <input onChange={(e)=> this.handleChange(e.target.value)} ></input>
      <button onClick={()=> this.handleClick(this.state.userInput)} >Add</button>
      <span>{this.state.list}</span>
    </div>
  );
  }
}

export default App;
