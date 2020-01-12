import React, {Component} from 'react'

class NewTask extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: '',
        }
    }

    handleInputChange({name, value}) {
        console.log(value)
        this.setState({[name]: value})
    }

    handleAdd = () => {
        this.props.add(this.state.input)
        this.setState({input: ''})
    }

    render(){
        return(
            <div>
                <input
                    name='input'
                    value={this.state.input}
                    placeholder='Enter new task'
                    onChange={e => this.handleInputChange(e.target)}
                    type='text'/>
                    <button onClick={this.handleAdd}>Git er Dun</button>
            </div>
        )
    }
}

export default NewTask