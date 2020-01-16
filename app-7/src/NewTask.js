import React, {Component} from 'react'

class NewTask extends Component{
    render(){
        return(
            <div>
                <input placeholder='Enter new git er dun' value={this.props.input} onChange={(e)=> this.props.handleChange(e.target.value)}/>
                <button onClick={() => this.props.add()}>Add</button>
            </div>
        )
    }
}

export default NewTask