import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
function About () {

    
    return <div>
        <h2>GeeksforGeeks is a computer science portal for geeks!</h2>
  
        Read more about us at : 

        <Link to="/home">
           About Us
        </Link>
    </div>
}
export default About;