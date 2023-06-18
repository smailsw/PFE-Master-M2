import React, { Component } from 'react'

import Home from './component/Home'
import Login from './component/Login';
import Axios from "axios";
import ErrorServer from "./component/NotConnected";
import DbError from './component/DbError';

//import './css/login.css'


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
      connectedToServer: false,
      connectedToDatabase: false,
    }
  }
  componentDidMount() {
    //////////////////
    console.log("Testing Connection");
    Axios.get("http://localhost:5000/")
      .then((res) => {
        if (res.status === 200) {
          console.log("Server connected",res);
          this.setState({ connectedToServer: true });
        }
      })
      .catch((error) => {
        console.log("Server not connected :",error);
      });
      ///////////////////
      console.log("Testing Database Connection");
      Axios.get("http://localhost:5000/dbtest")
        .then((res) => {
          if (res.status === 200) {
            console.log("Database connected",res);
            this.setState({ connectedToDatabase: true });
          }
        })
        .catch((error) => {
          console.log("Database not connected :",error);
        });
    
  }
  
  DoIdsd(){
    localStorage.removeItem('user')
    localStorage.removeItem('loggedIn')
    this.setState({ loggedIn: false, user: null})
  }
  render() {
    console.log('this.state.loggedIn',this.state.loggedIn)
    let serverConnected=this.state.connectedToServer;
    let dbConnected=this.state.connectedToDatabase;
    let app=null;
    if (serverConnected) {
      if (dbConnected) {
        app = this.state.loggedIn?
        <Home signout={() =>  this.DoIdsd()  }  />  :
        <Login signIn={(user) => this.setState({ loggedIn: true, user: user })} />;
      }else{
        app = <DbError />;
      }
    }else{
      app = <ErrorServer />;
    }

    return (
      <div className="back">

        {app}
        {/* <Home/> */}
        {/* <Login/> */}
     
      </div>
    )
  }
}

