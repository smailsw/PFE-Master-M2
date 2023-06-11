import React, { Component } from 'react'
import Axios from 'axios';
import history from '../history';



const initailState ={
    nom:'',
    prenom:'',
    email:'',
    adresse: '',
    sexe: '',
    cin: '',
    
    telephone: '',
    nomEror:'',
    prenomEror:'',
    emailEror:'',
    adresseEror: '',
    sexeEror: '',
    cinEror: '',
    
    telephoneEror: '',
    message:'',
    addS: null

}
export default class EditProf extends Component {
    constructor(props) {
        super(props);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAdresse = this.onChangeAdresse.bind(this);
        this.onChangeSexe = this.onChangeSexe.bind(this);
        this.onChangeCin = this.onChangeCin.bind(this);
        this.onChangeTelephone = this.onChangeTelephone.bind(this);
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
       
        onChangeTelephone(e) {
            this.setState({
                telephone: e.target.value
            });
        }
       
        /*la fonction de validation */
       
      
        validate =()=>{
            let nomEror="";
            let prenomEror="";
            let emailEror="";
            let adresseEror= "";
            let sexeEror="";
            let cinEror="";
           
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
        
            if(!this.state.telephone){
                telephoneEror="le champ telephone est obligatiore"
            }
           
           
            if(!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                emailEror="l'email est non validé, il faut avoire la forme suivante : *****@****.***";
            }
            if(emailEror||nomEror||prenomEror||adresseEror||sexeEror||cinEror||telephoneEror){
                this.setState({emailEror,nomEror,prenomEror,adresseEror,sexeEror,cinEror,telephoneEror});
                return false;
            }

            return true;
            
        }
        componentDidMount() {
            Axios.get('http://localhost:5000/profs/' + this.props.match.params.id)
                .then(res => {
                    console.log("res.data.id",res.data)
                    this.setState({
                        nom: res.data.first_name,
                        prenom: res.data.last_name,
                        email: res.data.email,
                        adresse: res.data.adresse,
                        sexe: res.data.sexe,
                        cin: res.data.cin,
                        telephone: res.data.telephone

                       
                    })
                    console.log(res.data )
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        
        onClick() {
            console.log('********!!!!!!!!!!**************!!!!!!!!!!!!*');
            const prof = {
                first_name: this.state.nom,
                last_name: this.state.prenom,
                email: this.state.email,
                adresse: this.state.adresse,
                sexe: this.state.sexe,
                cin: this.state.cin,
                telephone: this.state.telephone
    
            }
            console.log(prof)
           

            const isValid=this.validate();  
            if(isValid){
                console.log(prof)

                Axios.put('http://localhost:5000/profs/' + this.props.match.params.id, prof)
                .then(res => console.log(res.data));
                
                
                this.setState(
                    {
                        addS: "Professeur Modifié"
                    }
                )
                
            }else{
                console.log("il a un probleme dans la validation des informations")
            }
                     
    }
    annuler(e){
        history.push('/professeurs');
        window.location.reload(false); 
    }
  
    render() {
        return (
            <div className="db">
               
                <form class="text border border-light p-5">
                <div className={this.state.addS == null  ? 'hidden' : ''} >
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong > {this.state.addS}</strong> 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    </div>
                <b>Modifier un professeur </b>
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
                            </div>
                            <div style={{color:"red"}}>{this.state.cinEror}</div>
                    </div>
                    <div class="row">
                                           
                        <div className="col-md-6">
                                <label>telephone: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.telephone}
                                    onChange={this.onChangeTelephone}
                                />
                            </div>
                            <div style={{color:"red"}}>{this.state.telephoneEror}</div>
                    </div>
                    <div className="col-md-12">
                     {<button type="button"style={{float: "right"}} class="btn btn-success" onClick={()=>this.onClick()} >Modifier</button>}
                     <button type="button" style={{float: "right"}} class="btn btn-danger" onClick={this.annuler} >Annuler</button>
                  </div>
                </form>
      
      </div>
        
        )
    }
}







