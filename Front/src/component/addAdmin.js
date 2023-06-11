import React, { Component } from 'react'
import { addadmin } from '../service/serviceAddadmin';
import history from '../history';



const initailState ={
    nom:'',
    prenom:'',
    email:'',
    adresse: '',
    addS:null,
    
    nomEror:'',
    prenomEror:'',
    emailEror:'',
    adresseEror: ''

}
export default class addAdmin extends Component {
    constructor(props) {
        super(props);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAdresse = this.onChangeAdresse.bind(this);
     

        
        this.onSubmit = this.onSubmit.bind(this);

        this.state=initailState;


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
        
          
       

        /*la fonction de validation */
       
        validate =()=>{
            let nomEror="";
            let prenomEror="";
            let emailEror="";
            let adresseEror= "";
    
            

            if(!this.state.nom){
                nomEror="le champ Nom est obligatiore"
            }
            if(!this.state.prenom){
                prenomEror="le champ Prenom est obligatiore"
            }
            if(!this.state.adresse){
                adresseEror="le champ adresse est obligatiore"
            }
           
           
           
            if(!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                emailEror="l'email est non validé, il faut avoire la forme suivante : *****@****.***";
            }
            if(emailEror||nomEror||prenomEror||adresseEror){
                this.setState({emailEror,nomEror,prenomEror,adresseEror});
                return false;
            }

            return true;
            
        }

        onSubmit(e) {
            e.preventDefault();
            console.log('********!!!!!!!!!!**************!!!!!!!!!!!!*');
            const admin = {
                nom: this.state.nom,
                prenom: this.state.prenom,
                email: this.state.email,
                adresse: this.state.adresse,
               
            }
            console.log(admin)
           

            const isValid=this.validate();  
            if(isValid){
                console.log(admin);
                addadmin(admin).then(res => {
                console.log("il est envoyer");
                this.setState(initailState);
                this.setState({
                    addS: "Un Administrateur Ajouté "
                })
                    
                  })
                
            }else{
                console.log("il a un probleme dans la validation des informations")
            }
                     
    }
    annuler(e){
        history.push('/admins');
        window.location.reload(false); 
    }
    
  
    render() {
        return (
            <div className="db">
                
                
                    <form onSubmit={this.onSubmit}  class="text border border-light p-5">
                    <div className={this.state.addS == null  ? 'hidden' : ''} >
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong > {this.state.addS}</strong> 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    </div>
                    <b>Ajouter un administrateur</b>
                    <hr></hr>   
                    <div class="row">
                        <div className="col-md-6">
                                <label>Nom: </label>
                                <input type="text"
                                    required
                                    placeholder="Nom"
                                    className="form-control"
                                    value={this.state.nom}
                                    onChange={this.onChangeNom}
                                />
                                <div style={{color:"red"}}>{this.state.nomEror}</div>
                            </div>
                   
                    <div className="col-md-6">
                                <label>Prénom: </label>
                                <input type="text"
                                    required
                                    placeholder="Prénom"
                                    className="form-control"
                                    value={this.state.prenom}
                                    onChange={this.onChangePrenom}
                                />
                                 <div style={{color:"red"}}>{this.state.prenomEror}</div>
                            </div>
                           
                    </div>
                    <div class="row">
                    <div className="col-md-6">
                                <label> Email: </label>
                                <input type="text"
                                    required
                                    placeholder="Email"
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
                                    placeholder="Adresse"
                                    className="form-control"
                                    value={this.state.adresse}
                                    onChange={this.onChangeAdresse}
                                />
                                 <div style={{color:"red"}}>{this.state.adresseEror}</div>
                            </div>
                           
                    </div>
                   
                    
                    <div className="col-md-12">
                    <button style={{float:"right"}} type="button" class="btn btn-success" onClick={this.onSubmit} >Ajouter</button> 
                    <button style={{float:"right"}} type="button" class="btn btn-danger" onClick={this.annuler} >Annuler</button>   
                    </div>
                    </form>
      
      </div>
        
        )
    }
}