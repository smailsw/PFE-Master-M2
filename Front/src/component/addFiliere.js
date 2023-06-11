import React, { Component } from 'react'
import { addfiliere } from '../service/serviceAddfiliere';
import history from '../history';



const initailState ={
    nom_filiere:'',
    abreviation:'',
    listetudiants:[],
    selectStudents : [] ,
    addS: null,
        
    nom_filiereEror:'',
    abreviationEror:'',
    
}
export default class addFiliere extends Component {
    constructor(props) {
        super(props);
        this.onChangeNom_filiere = this.onChangeNom_filiere.bind(this);
        this.onChangeAbreviation = this.onChangeAbreviation.bind(this);
        this.onChangeSelectStudent = this.onChangeSelectStudent.bind(this);

       
            
        this.onSubmit = this.onSubmit.bind(this);

        this.state=initailState;


        }
        onChangeSelectStudent(e)
 {
    this.setState({
        selectStudents: [...this.state.selectStudents, e.target.value]
    })
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
        

        onSubmit(e) {
            e.preventDefault();
            console.log('********!!!!!!!!!!**************!!!!!!!!!!!!*');
            const filiere = {
                nom_filiere: this.state.nom_filiere,
                abreviation: this.state.abreviation,
                selectStudents: this.state.selectStudents
                              
            }

            console.log(filiere)
           

            const isValid=this.validate();  
            if(isValid){
                console.log(filiere);
                addfiliere(filiere).then(res => {
                this.setState(initailState)
                this.setState({
                    addS: "Filière Ajouteé"
                })
                console.log("il est envoyer");
                 
                  })
                
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
                    <div className={this.state.addS == null  ? 'hidden' : ''} >
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong > {this.state.addS}</strong> 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    </div> 
                    <b>Ajouter une filière</b>
                    <hr/>
                    <div class="form-group">
                        <div className="col-md-6">
                                <label>Nom de filière: </label>
                                <input type="text"
                                    required
                                    placeholder="Nom de filière"
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
                                    placeholder="Abreviation"
                                    className="form-control"
                                    value={this.state.abreviation}
                                    onChange={this.onChangeAbreviation}
                                />
                                <div style={{color:"red"}}>{this.state.abreviationEror}</div>
                            </div>
                            
                    </div>
                 
                                      
                    <div className="col-md-12">
                    <button type="button" class="btn btn-success" onClick={this.onSubmit} >Ajouter</button> 
                    <button type="button" class="btn btn-danger" onClick={this.annuler} >Annuler</button>   
                    </div>
                    </form>
      
      </div>
        
        )
    }
}