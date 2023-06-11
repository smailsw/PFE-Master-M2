import React, { Component } from 'react'
import { login } from '../service/serviceLogin';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import '../css/login.css'

const initState={
  email:'',
  password: '',
  emailEror: '',
  passwordEror: ''
}

export default class NotFound extends Component {
  
  constructor(props) {
    super(props);

  
}  


    render() {
     
        return (
          
            <div className="outer-div" > 
             
             <h2 style={{color: "red"}}>Page Not Found</h2>
          
          </div>
          
          
  
        )
      
    }
    
}

