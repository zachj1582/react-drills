import React, {Component} from 'react'

class Image extends Component{
    render(){
        return(
            <div>

            <img id='pic' src={this.props.url}/>
            </div>
        )
    }
}

export default Image