import React, {Component} from 'react'

class List extends Component{
    render(){
        let list = this.props.list.map((e,i)=> {
        return <h1 key={i}>{e}</h1>
        })
        return(
        <div>{list}</div>
        )
    }
}

export default List