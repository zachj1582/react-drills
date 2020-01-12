import React, {Component} from 'react'

class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:''
        }
    }
    render(){
        const {handleInput, handleClick, list, userInput} = this.props
        let listdisplayed = list.map((e,i)=> {
            return <li key={i}>{e}</li>
        })
        return(
            <div>
                <h1>My to-do list:</h1>
                <input value={userInput} name='userInput' placeholder='Enter new task'  onChange={e=> handleInput(e.target)}/>
                <button onClick={e=> handleClick()}>Git er dun</button>
                {listdisplayed}
            </div>
        )
    }
}

export default Todo