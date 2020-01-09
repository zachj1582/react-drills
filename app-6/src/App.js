import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './Todo'

class App extends Component{
  constructor(){
    super();
    this.state = {
      userInput: '',
      list: []
    }
    this.handleClick=this.handleClick.bind(this)
  }

  handleChange(val){
    this.setState({userInput: val})
  }

  handleClick(){
    this.setState({
      list: [...this.state.list, this.state.userInput], 
      userInput: ""
    })
  }

  render(){
    let list = this.state.list.map((element, index) => {
      return <ToDo key={index} task={element}/>;
    });

    return (
      <div className="App">
      <h4>My to-do list:</h4>

      <div>
       <input 
       value={this.state.input} 
       placeholder='Enter new task' 
       onChange={e => this.handleChange(e.target.value)} />
       <button onClick={this.handleClick} >Add</button>
      </div>

      <br />
      {list}
    </div>
  );
  }
}

export default App;
