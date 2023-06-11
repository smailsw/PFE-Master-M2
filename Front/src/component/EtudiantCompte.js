import React, { Component } from 'react'

import Axios from 'axios';


import {  MDBNotification } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../css/new.css'

import ChartModuleEtdnt from '../charts/ChartModuleEtdnt'

export default class EtudiantCompte extends Component {
    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            val:'',
            nom: '',
            prenom: '',
            cin: '',
            cne: '',
            adresse: '',
            date_Naissance: '',
            telephone: '',
            email: '',
            id_Filiere: '',
            nom_filiere: '',

            sujet: '',
            desc: '',

            urlImage: null

        };
    }
    handleChange(event) {
      console.log('*******************************')
      this.setState({
        urlImage: URL.createObjectURL(event.target.files[0])
      })
      
      const etudiant ={
        urlImage: URL.createObjectURL(event.target.files[0])
      }
      console.log('image----------------------->', URL.createObjectURL(event.target.files[0]))
      console.log('id_etudiant', localStorage.getItem('user'));
      
      Axios.put('http://localhost:5000/etudiants/'+localStorage.getItem('user'),etudiant)
      .then(res => {
          console.log('etudaint---------------> ',res.data)
       
      }) 
      .catch((error) => {
          console.log(error);
      })
    }

    componentDidMount() {
        const i = localStorage.getItem('user');
        console.log('i----------------->',i)
        Axios.get('http://localhost:5000/etudiants/'+i)
            .then(res => {
                console.log('etudaint---------------> ',res.data)
                this.setState({
                     nom: res.data.first_name,
                     prenom: res.data.last_name,
                     email: res.data.email,
                     adresse: res.data.adresse,
                     cin: res.data.cin,
                     cne: res.data.cne,
                     date_Naissance: res.data.date_naissance,
                     telephone: res.data.telephone,
                     id_Filiere: res.data.id_Filiere,
                     //urlImage: res.data.urlImage
                    })
                    
                    console.log('urlimage --------------------->', res.data.urlImage);
                    
               
            }) 
            .catch((error) => {
                console.log(error);
            })
            var iy = this.state.id_Filiere;
            console.log('id_Filiere ---------------------> ', iy);
             
            Axios.get('http://localhost:5000/filieres/' + 1)
            .then(res => {
                console.log("filiere by id ----------------->",res.data)
                this.setState({
                    nom_filiere: res.data.name,
                    abreviation: res.data.abreviation,
                
                   
                })
                
            })
            .catch((error) => {
                console.log(error);
            })

            Axios.get('http://localhost:5000/annances/ByIdFiliere/' + 2)
            .then(res => {
                console.log("annances where id filiere ------>",res.data.data[0])
                this.setState({
                    sujet: res.data.data[0].sujet,
                    desc: res.data.data[0].desc,
                    created: res.data.data[0].created,
                
                   
                })
                // console.log('annance --------------------->',res.data )
            })
            .catch((error) => {
                console.log(error);
            })

    }
    

    render() {

   
        return (
          <div >
              
    <div >
    <div>
             <div className="col-md-12" style={{float: "right"}}>  
              <MDBNotification
                  
                  className="notif"
                  show
                  fade
                  icon="envelope"
                  iconClassName="green-text"
                  title={this.state.sujet}
                  message={this.state.desc}
                  text={this.state.created}
                />
              </div>                
        </div>
    	<div class="row" >
     
      <div>
        <input type="file" className={this.state.urlImage != null  ? 'hidden' : ''} onChange={this.handleChange}/>
       
      </div>
      <div className="col-md-3"> 
      <img class="rounded float-left" src={this.state.urlImage}/>
      </div>
            <div className="col-md-3"> 
                 
                    <h1 className="dk">Nom: <samp className="nk">{this.state.nom}</samp></h1>
                    <br/>
                    <h1 className="dk">Prénom: <samp className="nk">{this.state.prenom}</samp></h1>
                    <br/>
                    <h1 className="dk">Email: <samp className="nk">{this.state.email}</samp></h1>
                    <br/>
                    <h1 className="dk">Adresse: <samp className="nk">{this.state.adresse}</samp></h1>
                    <br/>
                    <h1 className="dk">Filiere: <samp className="nk">{this.state.nom_filiere}</samp></h1>
                             
             </div>
            <div className="col-md-3">
                            
                             <h1 className="dk">CNE: <samp className="nk">{this.state.cne}</samp></h1>
                             <br></br>
                             <h1 className="dk">CIN: <samp className="nk">{this.state.cin}</samp></h1>
                             <br></br>
                             <h1 className="dk">Téléphone: <samp className="nk">{this.state.telephone}</samp></h1>
                             <br></br>
                             <h1 className="dk">Date de naissance: <samp className="nk">{this.state.date_Naissance}</samp></h1>
                            
                             
              </div>
         
             
                      
    		</div>

     
        <div className="row">
          <div className="col-md-12">
            <ChartModuleEtdnt className="nk"/> 
          </div>
       
        </div>
  
    </div>



                {/* <div className="db">
        <h3 className="db">Tous les etudiants <samp>{this.state.nom}{this.state.prenom}</samp></h3>
                    <table className="table table-bordered" >
                        <thead className="thead-light">
                             <b>Nom: <samp>{this.state.nom}</samp></b>
                             <br></br>
                             <b>Prénom: <samp>{this.state.prenom}</samp></b>
                             <br></br>
                             <b>Email: <samp>{this.state.email}</samp></b>
                             <br></br>
                             <b>Adresse: <samp>{this.state.adresse}</samp></b>
                             <br></br>
                             <b>CNE: <samp>{this.state.cne}</samp></b>
                             <br></br>
                             <b>CIN: <samp>{this.state.cin}</samp></b>
                             <br></br>
                             <b>Date de naissance: <samp>{this.state.date_Naissance}</samp></b>
                             <br></br>
                             <b>Téléphone: <samp>{this.state.telephone}</samp></b>
                           
                        </thead>
                        <tbody>
                           
                        </tbody>
                    </table>
                </div>
               
                <MDBRow>
                <MDBCol md='4'>
        <MDBCard wide cascade>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg'
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Alice Mayer</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Photographer</p>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              <a href='!#' className='px-2 fa-lg li-ic'>
                <MDBIcon fab icon='linkedin-in'></MDBIcon>
              </a>

              <a href='!#' className='px-2 fa-lg tw-ic'>
                <MDBIcon fab icon='twitter'></MDBIcon>
              </a>

              <a href='!#' className='px-2 fa-lg fb-ic'>
                <MDBIcon fab icon='facebook-f'></MDBIcon>
              </a>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
         </MDBRow>           
            */}
             </div>
             
        )
        }
    }
                                               