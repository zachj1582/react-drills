import React, {Component} from 'react';
import './App.css';
import Todo from './Todo'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      list: [],
      userInput: '',
    }
  }
  handleInput = ({name, value})=> {
    this.setState({[name]: value})
  }
  handleClick= () => {
    this.setState({
      list: [...this.state.list, this.state.userInput], userInput: ''
    })
  }
  render(){
    return(
      <div className='App'>
        <Todo handleInput={this.handleInput}
              handleClick={this.handleClick}
              list={this.state.list}
              userInput={this.state.userInput}/>
      </div>
    )
  }
}

export default App