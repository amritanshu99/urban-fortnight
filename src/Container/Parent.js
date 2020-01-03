import React, { Component } from 'react';
import Child from './Child'


class Parent extends Component {
  constructor(props) {
    super(props);
    console.log('constructor')
    this.state = {
      flag:false
        };
  }
  static getDerivedStateFromProps(props,state)
  {
      console.log("getDerivedStateFromProps")
      return state;
  }
  toggleButton=()=>
  {
    let{flag}=this.state
    let newFlag=flag
    this.setState({flag:!newFlag})
  }


 
  shouldComponentUpdate(nextProps, nextState) {
 console.log('should update')
 return false
  }

  componentDidUpdate() {
console.log('did update')
  }
  componentDidMount() {
    console.log('didmount');
  }
  render() {
      console.log('render')
    return (
      <div >
      Parent
      <button onClick={this.toggleButton}>Toggle</button>
      {this.state.flag?
      <Child/>:''}
      </div>
    );
  
  }
}

export default Parent;
