import React, { Component } from 'react'
import Axios from 'axios';
import history from '../history';




const initailState ={
    id: '',
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
    message:''

}
export default class EditCUser extends Component {
    constructor(props) {
        console.log('user component //////////')
        super(props);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);

        this.onChangeMessage = this.onChangeMessage.bind(this);

        
       this.onClick = this.onClick.bind(this);

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
        componentDidMount() {
            Axios.get('http://localhost:5000/users/' + this.props.match.params.id)
                .then(res => {
                    console.log("res.data.id",res.data)
                    this.setState({
                        id: res.data.id,
                        nom: res.data.first_name,
                        prenom: res.data.last_name,
                        email: res.data.email,
                        password: res.data.password,
                        role: res.data.role
                       
                    })
                    console.log(res.data )
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        
        onClick() {
            console.log('********!!!!!!!!!!**************!!!!!!!!!!!!*');
            const user = {
                first_name: this.state.nom,
                last_name: this.state.prenom,
                email: this.state.email,
                password: this.state.password,
                role: this.state.role
    
            }
            console.log(user)
           

            const isValid=this.validate();  
            if(isValid){
                console.log(user);
                Axios.put('http://localhost:5000/users/' + this.props.match.params.id, user)
                .then(res => console.log(res.data));
                alert("Utilisateur a est modifié")
                
                
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
            <div>
                <b className="-b">Bienvuneu dans vorte compte Mr <samp className="-spam"> {this.state.nom}</samp></b>
                  <form onSubmit={this.onSubmit}  class="text border border-light p-5">
                    <b>Modifier les informations de votre compte</b>
                    
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
                                <label>Prénom: </label>
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
                                <label>Mot de passe: </label>
                                <input type="password"
                                    required
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    
                                />
                                <div style={{color:"red"}}>{this.state.passwordEror}</div>
                            </div>
                            
                    </div>
                   
                   
                    <div className="col-md-12">
                   { <button style={{float:"right"}} type="button" class="btn btn-success" onClick={()=>this.onClick()} >Modifier</button> }
                   <button type="button" class="btn btn-danger" style={{float:"right"}} onClick={this.annuler} >Annuler</button>
                    
                    </div>

                    </form>
                
      
      </div>
        
        )
    }
}







