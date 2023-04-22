/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props);
    console.log('hello');
  }

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

  componentDidMount(){
    console.log('component did mount')
  }

  componentDidUpdate(){
    console.log('component did update');
  }

  componentWillUnmount(){
    console.log('component will unmount');
  }

  render(){
    console.log('render')
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
