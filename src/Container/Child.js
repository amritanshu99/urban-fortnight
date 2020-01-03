import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        console.log('constructor')

    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("child getDerivedStateFromProps")
    }
    componentDidMount() {
      console.log('child didmount');
    }
  
    render() {
        console.log('child render')
        return (
            <div>
                Child
      </div>
        );

    }
}

export default App;
