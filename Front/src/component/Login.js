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

export default class Login extends Component {
  
  constructor(props) {
    super(props);

    this.state = initState;
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)

    this.onSubmit = this.onSubmit.bind(this)
}  

onChangeEmail(e) {
  this.setState({
      email: e.target.value
  });
}
onChangePassword(e) {
  this.setState({
      password: e.target.value
  });
}

 Valider(){
   let emailEror="";
   let passwordEror = "";

 
      if(!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
          emailEror="l'email est non validé, il faut avoire la forme suivante : *****@****.***";
      }
      if(!this.state.password.match(/^([\w.%+-]+)/i)){
        passwordEror="le champ mot de passe est obligatiore"
      }
      if(emailEror||passwordEror){
        this.setState({emailEror,passwordEror});
        return false;
    }

    return true;
 }
onSubmit(e) {
  e.preventDefault()
  
  const user = {
    email: this.state.email,
    password: this.state.password
  }
    console.log(user)
    const isValid=this.Valider();  
    if(!!isValid){
      login(user).then(res => {
        if (res) {
          console.log('------------------------>******',res)
          localStorage.setItem('loggedIn', true);
          console.log('ress-------',res)
          this.props.signIn(res);
          console.log("vous avez connecter", res.user)
      
        }
      })     
    }else{
        console.log("il a un probleme dans la validation des informations")
        alert("il a un probleme dans la validation des informations")
    }
 
}
    render() {
     
        return (
          
            <div className="outer-div" > 
             
              <MDBContainer className="inner-div">
                <MDBRow>
                  <MDBCol className="text-center">
                    <MDBCard >
                      <MDBCardBody>
                        <MDBCardHeader className="form-header deep-blue-gradient ">
                          <h3 className="my-3">
                            <MDBIcon icon="lock" /> S'identifier:
                          </h3>
                        </MDBCardHeader>
                        <form>
                          <div className="grey-text">
                            <MDBInput
                              label="Adresse email"
                              group
                              type="email"
                              validate
                              success="right"
                              value={this.state.email}
                              onChange={this.onChangeEmail}
                              
                            />
                             <div style={{color:"red"}}>{this.state.emailEror}</div>
                            <MDBInput
                              label="Mot de passe"
                              group
                              type="password"
                              validate
                              value={this.state.password}
                              onChange={this.onChangePassword}
                             
                            />
                             <div style={{color:"red"}}>{this.state.passwordEror}</div>
                          </div>

                        <div className="text-center mt-4">
                          <MDBBtn
                            color="blue"
                            className="mb-3"
                            type="submit"
                            
                            onClick={this.onSubmit}
                          >
                            Ce connecter
                          </MDBBtn>
                        </div>
                        </form>
                        <MDBModalFooter>
                                {'Copyright © '}
                                <a href="http://www.este.ucam.ac.ma">
                                    EST Essouira</a> 2019-2020
                        </MDBModalFooter>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
          
          </div>
          
          
  
        )
      
    }
    
}

