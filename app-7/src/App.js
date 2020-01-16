import React, {Component} from 'react'
import './App.css'
import List from './List'
import NewTask from './NewTask'
import Todo from './Todo'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: [],
            input: ''
        }
    }
    handleAddTask=()=>{
        this.setState({list: [...this.state.list, this.state.input], input:''})
    }
    handleChange= (val)=> {
        this.setState({input: val})
    }

    render(){
        return(
            <div className='App'>
                <h1>My git er Dun List</h1>
                <NewTask handleChange={this.handleChange}
                         add={this.handleAddTask}
                         input={this.input}/>
                <List list={this.state.list}/>
            </div>
        )
    }
}

export default App