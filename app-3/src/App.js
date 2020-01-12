import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      filterString: '',
      list: ['groceries', 'dog groomers', 'get job', 'get paid', 'go to Disneyland']
    }
  }
  handleChange(filter){
    this.setState({filterString: filter})
  }
  render(){
    let listDisplay = this.state.list.filter((e,i)=> {
      return e.includes(this.state.filterString)
    })
    .map((e,i)=> {
      return <h2 key={i}>{e}</h2>
    })

    return (
      <div className="App">
      <input onChange={e => this.handleChange(e.target.value)} type='text'/>
      {listDisplay}
    </div>
  );
 }
}

export default App;
