import React, { Component } from 'react'
import Axios from 'axios';
import history from '../history';


const initailState ={
    nom_filiere:'',
    abreviation:'',
        
    nom_filiereEror:'',
    abreviationEror:'',
    
}
export default class EditFiliere extends Component {
    constructor(props) {
        super(props);
        this.onChangeNom_filiere = this.onChangeNom_filiere.bind(this);
        this.onChangeAbreviation = this.onChangeAbreviation.bind(this);
        

        
       this.onClick = this.onClick.bind(this);

        this.state=initailState;


        }
        
        onChangeNom_filiere(e) {
            this.setState({
                nom_filiere: e.target.value
            });
        }
        onChangeAbreviation(e) {
            this.setState({
                abreviation: e.target.value
            });
        }
       
        /*la fonction de validation */
       
      
        validate =()=>{
            let nom_filiereEror="";
            let abreviationEror="";
           
            if(!this.state.nom_filiere){
                nom_filiereEror="le champ Nom de filiere est obligatiore"
            }
            if(!this.state.abreviation){
                abreviationEror="le champ abreviation est obligatiore"
            }
                       
            if(nom_filiereEror||abreviationEror){
                this.setState({nom_filiereEror,abreviationEror});
                return false;
            }

            return true;
            
        }
        componentDidMount() {
            Axios.get('http://localhost:5000/filieres/' + this.props.match.params.id)
                .then(res => {
                    console.log("res.data.id",res.data)
                    this.setState({
                        nom_filiere: res.data.name,
                        abreviation: res.data.abreviation,
                    
                       
                    })
                    console.log(res.data )
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        
        onClick() {
            console.log('********!!!!!!!!!!**************!!!!!!!!!!!!*');
            const filiere = {
                name: this.state.nom_filiere,
                abreviation: this.state.abreviation,
                
               
            }
            console.log(filiere)
           

            const isValid=this.validate();  
            if(isValid){
                console.log(filiere)

                Axios.put('http://localhost:5000/filieres/' + this.props.match.params.id, filiere)
                .then(res => console.log(res.data));
                alert("filiere a est modifié")
                this.props.history.push('/filieres')
                
            }else{
                console.log("il a un probleme dans la validation des informations")
            }
                     
    }
     
    annuler(e){
        history.push('/filieres');
        window.location.reload(false); 
    }
    
  
    render() {
        return (
            <div className="db">
                 <form onSubmit={this.onSubmit}  class="text border border-light p-5">   
                 <b>Modifier une filière </b>
                    <hr/>
                    <div class="form-group">
                        <div className="col-md-6">
                                <label>Nom de filière: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.nom_filiere}
                                    onChange={this.onChangeNom_filiere}
                                />
                                <div style={{color:"red"}}>{this.state.nom_filiereEror}</div>
                            </div>
                            
                    </div>
                    <div class="form-group">
                    <div className="col-md-6">
                                <label>Abreviation: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.abreviation}
                                    onChange={this.onChangeAbreviation}
                                />
                                <div style={{color:"red"}}>{this.state.abreviationEror}</div>
                            </div>
                            
                    </div>
                 
                                      
                    <div className="col-md-12">
        {<button type="button" class="btn btn-success" onClick={()=>this.onClick()} >Modifier</button> }
                    <button type="button" class="btn btn-danger" onClick={this.annuler} >Annuler</button>   
                    </div>
                    </form>

                {/* <b>Modifier une filiere </b>
                <form >
                <div class="form-group">
                        <div className="col-md-6">
                                <label>Nom de filiere: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.nom_filiere}
                                    onChange={this.onChangeNom_filiere}
                                />
                            </div>
                            <div style={{color:"red"}}>{this.state.nom_filiereEror}</div>
                    </div>
                    <div class="form-group">
                    <div className="col-md-6">
                                <label>abreviation: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.abreviation}
                                    onChange={this.onChangeAbreviation}
                                />
                            </div>
                            <div style={{color:"red"}}>{this.state.abreviationEror}</div>
                    </div>
                  
                {<button type="button" class="btn btn-primary" onClick={()=>this.onClick()} >Modifier</button>}
                </form> */}
      
      </div>
        
        )
    }
}







