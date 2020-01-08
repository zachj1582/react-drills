import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component{
  render(){
  return (
    <div className="App">
      <Image url={'https://i.pinimg.com/236x/23/f9/c4/23f9c4bfaaaad3e9a91fcc66ab6df31c.jpg'}/>
    </div>
  );
 }
}
export default App;
