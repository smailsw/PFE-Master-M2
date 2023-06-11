import React, { Component } from 'react'
import { addetudiant } from '../service/serviceAddetudiant';
import Axios from 'axios';

import history from '../history';

const initailState ={
    nom:'',
    prenom:'',
    email:'',
    adresse: '',
    sexe: '',
    cin: '',
    cne: '',
    date_naissance: '',
    telephone: '',
    nomEror:'',
    prenomEror:'',
    emailEror:'',
    adresseEror: '',
    sexeEror: '',
    cinEror: '',
    cneEror:'',
    date_naissanceEror: '',
    telephoneEror: '',
    listefilieres: [],
    selectFiliere:'',
    message:'',
    addS: null

}
export default class addEtudiant extends Component {
    constructor(props) {
        super(props);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAdresse = this.onChangeAdresse.bind(this);
        this.onChangeSexe = this.onChangeSexe.bind(this);
        this.onChangeCin = this.onChangeCin.bind(this);
        this.onChangeCne = this.onChangeCne.bind(this);
        this.onChangeDate_naissance = this.onChangeDate_naissance.bind(this);
        this.onChangeTelephone = this.onChangeTelephone.bind(this);
        this.onChangeSelectFiliere = this.onChangeSelectFiliere.bind(this);

       
        this.onChangeMessage = this.onChangeMessage.bind(this);

        
        this.onSubmit = this.onSubmit.bind(this);

        this.state=initailState;


        }
        onChangeMessage(e){
            this.setState({
                message: e.target.value
            })
        }
        onChangeNom(e) {
            this.setState({
                nom: e.target.value
            });
        }
        onChangePrenom(e) {
            this.setState({
                prenom: e.target.value
            });
        }
        onChangeEmail(e) {
            this.setState({
                email: e.target.value
            });
        }
        onChangeAdresse(e) {
            this.setState({
                adresse: e.target.value
            });
        }
        onChangeSexe(e) {
            this.setState({
                sexe: e.target.value
            });
        }
        onChangeCin(e) {
            this.setState({
                cin: e.target.value
            });
        }
        onChangeCne(e) {
            this.setState({
                cne: e.target.value
            });
        }
        onChangeDate_naissance(e) {
            this.setState({
                date_naissance: e.target.value
            });
        }
        onChangeTelephone(e) {
            this.setState({
                telephone: e.target.value
            });
        }
        onChangeSelectFiliere(e){
            this.setState({
                selectFiliere: e.target.value
            })
        }
       
          
       

        /*la fonction de validation */
       
        validate =()=>{
            let nomEror="";
            let prenomEror="";
            let emailEror="";
            let adresseEror= "";
            let sexeEror="";
            let cinEror="";
            let cneEror="";
            let date_naissanceEror="";
            let telephoneEror="";
            

            if(!this.state.nom){
                nomEror="le champ Nom est obligatiore"
            }
            if(!this.state.prenom){
                prenomEror="le champ Prenom est obligatiore"
            }
            if(!this.state.adresse){
                adresseEror="le champ adresse est obligatiore"
            }
            if(!this.state.sexe){
                sexeEror="le champ sexe est obligatiore"
            }
            if(!this.state.cin){
                cinEror="le champ CNI est obligatiore"
            }
            if(!this.state.cne){
                cneEror="le champ CNE est obligatiore"
            }
            if(!this.state.date_naissance){
                date_naissanceEror="le champ date de naissance est obligatiore"
            }
            if(!this.state.telephone){
                telephoneEror="le champ telephone est obligatiore"
            }
           
           
            if(!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                emailEror="l'email est non validé, il faut avoire la forme suivante : *****@****.***";
            }
            if(emailEror||nomEror||prenomEror||adresseEror||sexeEror||cinEror|cneEror||date_naissanceEror||telephoneEror){
                this.setState({emailEror,nomEror,prenomEror,adresseEror,sexeEror,cinEror,cneEror,date_naissanceEror,telephoneEror});
                return false;
            }

            return true;
            
        }
        componentDidMount() {
            Axios.get('http://localhost:5000/filieres/')
                .then(res => {
                    this.setState({listefilieres:res.data.data})
                    // console.log("listetudiant",res.data.data)
                    // console.log("state",this.state.listetudiants)
                    // this.setState({listetudiants: Array.from(event.target.selectedOptions, (item) => item.value)});

                    console.log(res.data.data)   
                }) 
                .catch((error) => {
                    console.log(error);
                })
      
    
        }


        onSubmit(e) {
            e.preventDefault();
            console.log('********!!!!!!!!!!**************!!!!!!!!!!!!*');
            const etudiant = {
                nom: this.state.nom,
                prenom: this.state.prenom,
                email: this.state.email,
                adresse: this.state.adresse,
                sexe: this.state.sexe,
                cin: this.state.cin,
                cne: this.state.cne,
                date_naissance: this.state.date_naissance,
                telephone: this.state.telephone,
                selectFiliere: this.state.selectFiliere
            }
            console.log(etudiant)
           

            const isValid=this.validate();  
            if(isValid){
                console.log(etudiant);
                addetudiant(etudiant).then(res => {
                console.log("il est envoyer");
                this.setState(initailState);
                this.setState({
                    addS: "Etudiant Ajouté"
                })    
                  })
                
            }else{
                console.log("il a un probleme dans la validation des informations")
            }
                     
    }
    annuler(e){
        history.push('/etudiants');
        window.location.reload(false); 
    }
    
  
    render() {
        return (
            <div  className="db">
                
                
                    <form onSubmit={this.onSubmit} class="text border border-light p-5">  
                    <div className={this.state.addS == null  ? 'hidden' : ''} >
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong > {this.state.addS}</strong> 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    </div> 
                    <b>Ajouter un étudiant</b>
                    <hr/>
                    <div class="row">
                        
                             <div className="col-md-6">
                                <label>Nom: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.nom}
                                    onChange={this.onChangeNom}
                                />
                                <div style={{color:"red"}}>{this.state.nomEror}</div>
                            </div>
                            
                         
                             <div className="col-md-6">
                                <label>Prenom: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.prenom}
                                    onChange={this.onChangePrenom}
                                />
                                 <div style={{color:"red"}}>{this.state.prenomEror}</div>
                            </div>
                           
                    </div>
                
                    <div class="row">
                    <div className="col-md-6">
                                <label>Email: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                />
                                 <div style={{color:"red"}}>{this.state.emailEror}</div>
                            </div>
                           
                   
                    
                    <div className="col-md-6">
                                <label>Adresse: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.adresse}
                                    onChange={this.onChangeAdresse}
                                />
                                <div style={{color:"red"}}>{this.state.adresseEror}</div>
                            </div>
                            
                     </div>
                    <div class="row">
                    <div className="col-md-6">
                                <label>Sexe: </label>
                                <select class="browser-default custom-select"
                                     value={this.state.sexe}
                                    onChange={this.onChangeSexe}>
                                <option value="H">H</option>
                                <option value="F">F</option>
                                
                                </select>
                                <div style={{color:"red"}}>{this.state.sexeEror}</div> 
                            </div>
                                              
                    <div className="col-md-6">
                                <label>CIN: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.cin}
                                    onChange={this.onChangeCin}
                                />
                                <div style={{color:"red"}}>{this.state.cinEror}</div>
                            </div>
                            
                    </div>
                    <div class="row">
                    <div className="col-md-6">
                                <label>CNE: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.cne}
                                    onChange={this.onChangeCne}
                                />
                                <div style={{color:"red"}}>{this.state.cneEror}</div>
                            </div>
                            
                    
                    <div className="col-md-6">
                                <label>Date de naissance: </label>
                                <input type="date"
                                    required
                                    className="form-control"
                                    value={this.state.date_naissance}
                                    onChange={this.onChangeDate_naissance}
                                />
                                <div style={{color:"red"}}>{this.state.date_naissanceEror}</div>
                            </div>
                            
                    </div>
                    <div class="row">
                    <div className="col-md-6">
                                <label>Téléphone: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.telephone}
                                    onChange={this.onChangeTelephone}
                                />
                                <div style={{color:"red"}}>{this.state.telephoneEror}</div>
                            </div>
                            
                    
                            <div className="col-md-6">
                                <label>Filière: </label>
                             <select name="listefiliere" 
                                value={this.state.selectFiliere}
                                  onChange={this.onChangeSelectFiliere} class="form-control ">
                                        {this.state.listefilieres.map((listefilieres) =>
                                             <option value={listefilieres.id_Filiere}>{listefilieres.name}</option>
                                        )}
                                    </select>
                             </div>
                       </div>
                        <br/>

                    <div className="col-md-12">
                    <button type="button" style={{float: "right"}} class="btn btn-success" onClick={this.onSubmit} >Ajouter</button> 
                    <button type="button" style={{float: "right"}} class="btn btn-danger" onClick={this.annuler} >Annuler</button>   
                    </div>
                    </form>
      
      </div>
        
        )
    }
}