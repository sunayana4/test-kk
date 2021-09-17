/* global gapi */
import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
// import styles from './css/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NewContainerComponent from './containers/newContainer';
const CLIENT_ID = '609742289433-45uq942q6u8vmeh8ce069pqomgjieubo.apps.googleusercontent.com'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      a: 0
    }

    console.log(this.props.history);
  }

  // doGoogleSigIn1 = () => {
  //   var that = this.state;
  //   this.setState(function()  {
  //     setTimeout(function()  {
  //      // console.log("helo ==== heloo", that.state.a)
  //     })
  //   })
  // }

  // doGoogleSigIn = () => {
  //   try {
  //     window.gapi.load("auth2", () => {
  //       if (!window.gapi.auth2.getAuthInstance()) {
  //         window.gapi.auth2
  //           .init({
  //             client_id: CLIENT_ID,
  //           })
  //           .then((data, erro) => {
  //             if (data && data.currentUser) {
  //               this.setState({
  //                 isSignedIn: true
  //               });
  //             } else {
  //               this.setState({
  //                 isSignedIn: false
  //               });
  //             }
  //           }).catch((error) => {
  //             console.log(error)
  //             this.setState({
  //               isSignedIn: false
  //             });
  //           })
  //       } else {
  //         this.setState({
  //             isSignedIn: true
  //         });
  //       }
  //     });
  //   } catch (error) {
  //     this.setState({
  //         isSignedIn: false
  //     });
  //     console.log(error)
  //   }
  // }

  getContent() {
    var name = 'jsjjs';
    //debugger
    // if (this.state.isSignedIn) {
    // return 
    // } else {
    //   return (
    //     <div>
    //       <h1 className={styles.bigblue}>Hello Car!</h1>
    //       <p>You are not signed in. Click here to sign in.</p>
    //       <button id="loginButton" onClick={() => { this.doGoogleSigIn() }}>Login with Google</button>
    //     </div>
    //   )
    // }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log(error)
  //  return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    debugger
    console.log(error)
    // You can also log the error to an error reporting service
   // logErrorToMyService(error, errorInfo);
  }

  render() {
    return (
      <div>
        <h1 data-testid="html-element">Hello World</h1>
        {<NewContainerComponent />}
        {/* <button id="loginButtoddn" onClick={() => { this.getContent() }}>Login with Googleddd</button> */}
      </div>
    );
  }

}

export default App;
