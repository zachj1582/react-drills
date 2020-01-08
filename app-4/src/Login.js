import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            userName: '',
            password: '',
        }
        this.handleLogin=this.handleLogin.bind(this)
    }

    handleChange1(val){
        this.setState({userName: val})
    }

    handleChange2(val){
        this.setState({password: val})
    }

    handleLogin(){
        alert(`Username: ${this.state.userName} Password: ${this.state.password}`)
    }

    

    render(){
        return(
          <div>
            <input onChange={e=> this.handleChange1(e.target.value)} type='text' ></input>
            <input onChange={e=> this.handleChange2(e.target.value)} type='text' ></input>
            <button onClick={this.handleLogin} >Login</button>
          </div>
        )
    }
}

export default Login

