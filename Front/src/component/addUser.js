import React, { Component } from 'react'
import { adduser } from '../service/serviceAdduser';
import history from '../history';



const initailState ={
    nom:'',
    prenom:'',
    email:'',
    password:'',
    role:'',
    nomEror:'',
    prenomEror:'',
    emailEror:'',
    passwordEror:'',
    roleEror:'',
    message:'',
    addS: null

}
export default class addUser extends Component {
    constructor(props) {
        console.log('user component //////////')
        super(props);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
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
          
        onChangePassword(e) {
            this.setState({
                password: e.target.value
            });
        }
        onChangeRole(e) {
            this.setState({
                role: e.target.value
            });
        }

        /*la fonction de validation */
       
        validate =()=>{
            let nomEror="";
            let prenomEror="";
            let emailEror="";
            let passwordEror="";
            let roleEror="";


            if(!this.state.nom){
                nomEror="le champ Nom est obligatiore"
            }
            if(!this.state.prenom){
                prenomEror="le champ Prenom est obligatiore"
            }
            if(!this.state.role){
                roleEror="le champ role est obligatiore"
            }
            if(!this.state.password.match(/^([\w.%+-]+)/i)){
                passwordEror="le champ mot de passe est obligatiore"
            }
            if(!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                emailEror="l'email est non validé, il faut avoire la forme suivante : *****@****.***";
            }
            if(emailEror||nomEror||prenomEror||passwordEror||roleEror){
                this.setState({emailEror,nomEror,prenomEror,passwordEror,roleEror});
                return false;
            }

            return true;
            
        }

        onSubmit(e) {
            e.preventDefault();
            console.log('********!!!!!!!!!!**************!!!!!!!!!!!!*');
            const user = {
                nom: this.state.nom,
                prenom: this.state.prenom,
                email: this.state.email,
                password: this.state.password,
                role: this.state.role

    
            }
            console.log(user)
           

            const isValid=this.validate();  
            if(!!isValid){
                console.log(user);
                adduser(user).then(res => {
                console.log("il est envoyer");
                this.setState(initailState);
                this.setState({
                    addS: "Un Utilisateur Ajouté "
                })
                    
                  })
                
            }else{
                console.log("il a un probleme dans la validation des informations")
            }
                     
    }
    annuler(e){
        history.push('/users');
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
                    <b>Ajouter un utilisateur</b>
                    <hr/>   
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
                                <label>Email: </label>
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
                                <label>Mot de passe: </label>
                                <input type="password"
                                    required
                                    placeholder="Mot de passe"
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    
                                />
                                <div style={{color:"red"}}>{this.state.passwordEror}</div>
                            </div>
                            
                    </div>
                    <div class="row">
                    <div className="col-md-6">
                                <div class="form-group">
                                    <label for="role">Role:</label>
                                    <select class="form-control" id="role"
                                    value={this.state.role}
                                    onChange={this.onChangeRole}>
                                        <option>Admin</option>
                                        <option>Prof</option>
                                        <option>Etudiant</option>
                                    </select>
                                    <div style={{color:"red"}}>{this.state.roleEror}</div>
                                    </div>
                            
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