import React, { Component } from 'react'
import Axios from 'axios';
import history from '../history';



const initailState ={
    nom:'',
    prenom:'',
    email:'',
    adresse: '',
  
    nomEror:'',
    prenomEror:'',
    emailEror:'',
    adresseEror: ''

}
export default class EditAdmin extends Component {
    constructor(props) {
        super(props);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAdresse = this.onChangeAdresse.bind(this);
        

        
       this.onClick = this.onClick.bind(this);

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
          
           
           
            if(!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                emailEror="l'email est non validé, il faut avoire la forme suivante : *****@****.***";
            }
            if(emailEror||nomEror||prenomEror||adresseEror){
                this.setState({emailEror,nomEror,prenomEror,adresseEror});
                return false;
            }

            return true;
            
        }
        componentDidMount() {
            Axios.get('http://localhost:5000/admins/' + this.props.match.params.id)
                .then(res => {
                    console.log("res.data.id",res.data)
                    this.setState({
                        nom: res.data.first_name,
                        prenom: res.data.last_name,
                        email: res.data.email,
                        adresse: res.data.adresse,
                       

                       
                    })
                    console.log(res.data )
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        
        onClick() {
            console.log('********!!!!!!!!!!**************!!!!!!!!!!!!*');
            const admin = {
                first_name: this.state.nom,
                last_name: this.state.prenom,
                email: this.state.email,
                adresse: this.state.adresse,
               
            }
            console.log(admin)
           

            const isValid=this.validate();  
            if(isValid){
                console.log(admin)

                Axios.put('http://localhost:5000/admins/' + this.props.match.params.id, admin)
                .then(res => console.log(res.data));
                alert("admins a est modifié")
                this.props.history.push('/admins')
                
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
                <b>Modifier un admin </b>
                                    <hr></hr>   
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
                            </div>
                            <div style={{color:"red"}}>{this.state.prenomEror}</div>
                    </div>
                    <div class="row">
                    <div className="col-md-6">
                                <label>email: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                />
                                <div style={{color:"red"}}>{this.state.emailEror}</div>
                            </div>
                            
                    
                    <div className="col-md-6">
                                <label>adresse: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.adresse}
                                    onChange={this.onChangeAdresse}
                                />
                            </div>
                            <div style={{color:"red"}}>{this.state.adresseEror}</div>
                    </div>
                   
                    
                    <div className="col-md-12">
                    <button style={{float:"right"}} type="button" class="btn btn-success" onClick={()=>this.onClick()} >Modifier</button> 
                    <button style={{float:"right"}} type="button" class="btn btn-danger" onClick={this.annuler} >Annuler</button>   
                    </div>
                    </form>
                  
                
      
      </div>
        
        )
    }
}







