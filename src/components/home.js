import React, { Component } from 'react';
class Home extends  Component {
    
    constructor(props){
        super(props);
        debugger;
        console.log(props)

        props.history.push('AppData')
    }

    render() {
        return(
             <h1>Welcome to the world of Geeks!</h1>
        );
    }
    //return <h1>Welcome to the world of Geeks!</h1>
}
  
export default Home;