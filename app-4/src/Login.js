import React, {Component} from 'react'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            userName: '',
            password: '',
        }
    }

    handleUser(val){
        this.setState({userName: val})
    }

    handlePassword(val){
        this.setState({password: val})
    }

    handleClick(){
        alert(`Username: ${this.state.userName} Password: ${this.state.password}`)
    }
    render(){
        return(
            <div>
                <input onChange={e=> this.handleUser(e.target.value)} type='text'></input>
                <input onChange={e=> this.handlePassword(e.target.value)} type='text'></input>
                <button onClick={e=> this.handleClick()}>Login</button>
            </div>
        )
    }
}

export default Login