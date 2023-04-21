/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

class App extends React.Component{

  state = {
    count: 3 ,
  };

  add = () =>{
    console.log('add');
    this.setState({count: this.state.count + 1})
  };

  minus = () =>{
    console.log('minus');
    this.setState({count:this.state.count-1})
  };
  render(){
    return(
      <div>
        <h3> This number is {this.state.count} </h3>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    ) 
  }
}

export default App;
