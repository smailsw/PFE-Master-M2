import React, { Component } from 'react'

import Home from './component/Home'
import Login from './component/Login';

import './css/login.css'


// const initlog=false;
let  currentUser  ={};
//let  isloggedIn =true ;
export default class App extends Component {
 
  constructor(props) {    
    super(props);
     currentUser = localStorage.getItem('user'); // localStorage.removeItem('user')
     //isloggedIn = localStorage.getItem('loggedIn') ;  // localStorage.removeItem('loggedIn')
    this.state = {
      loggedIn: localStorage.getItem('loggedIn') === "true" ?  true : false,
      user: {
        email: currentUser ? currentUser.email : '',
      },
    }
  }
  DoIdsd(){
    localStorage.removeItem('user')
    localStorage.removeItem('loggedIn')
    this.setState({ loggedIn: false, user: null})
  }
  render() {
      console.log('this.state.loggedIn',this.state.loggedIn)
    
    const app = this.state.loggedIn?
    <Home signout={() =>  this.DoIdsd()  }  />  :
    <Login signIn={(user) => this.setState({ loggedIn: true, user: user })} />;

    return (
      <div className="back">
        {app}
        {/* <Home/> */}
        {/* <Login/> */}
     
      </div>
    )
  }
}

