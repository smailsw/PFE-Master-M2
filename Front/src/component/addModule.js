import React, { Component } from 'react'
import { addmodule } from '../service/serviceAddmodule';
import Axios from 'axios';
import history from '../history';



const initailState ={
    nom_module:'',
    nbrHeur:'',
    selectProf: '',
    listeprofs:[],

    selectFiliere: '',
    listefilieres:[],
        
    nom_moduleEror:'',
    nbrHeurEror:'',
    selectFiliereEror:'',
    addS: null
    
}
export default class addModule extends Component {
    constructor(props) {
        super(props);
        this.onChangeNom_module = this.onChangeNom_module.bind(this);
        this.onChangeNbrHeur = this.onChangeNbrHeur.bind(this);
        this.onChangeSelectProf = this.onChangeSelectProf.bind(this);
        this.onChangeSelectFiliere = this.onChangeSelectFiliere.bind(this);


       
            
        this.onSubmit = this.onSubmit.bind(this);

        this.state=initailState;


        }
         
        onChangeNom_module(e) {
            this.setState({
                nom_module: e.target.value
            });
        }
        onChangeNbrHeur(e) {
            this.setState({
                nbrHeur: e.target.value
            });
        }
        onChangeSelectProf(e) {
            this.setState({
                selectProf: e.target.value
            });
        }
        onChangeSelectFiliere(e) {
            this.setState({
                selectFiliere: e.target.value
            });
        }
        

        /*la fonction de validation */
       
        validate =()=>{
            let nom_moduleEror="";
            let nbrHeurEror="";
            let selectFiliereEror="";
           
            if(!this.state.nom_module){
                nom_moduleEror="le champ Nom de module est obligatiore"
            }
            if(!this.state.nbrHeur){
                nbrHeurEror="le champ nombre d'heur est obligatiore"
            }
            if(!this.state.selectFiliere){
                selectFiliereEror="le champ filiere est obligatiore"
            }
                       
            if(nom_moduleEror||nbrHeurEror||selectFiliereEror){
                this.setState({nom_moduleEror,nbrHeurEror,selectFiliereEror});
                return false;
            }

            return true;
            
        }

        componentDidMount() {
            Axios.get('http://localhost:5000/filieres/')
            .then(res => {
                this.setState({listefilieres:res.data.data})
                 console.log("listfilieres",res.data.data)
               

                console.log(res.data.data)   
            }) 
            .catch((error) => {
                console.log(error);
            }) 
            Axios.get('http://localhost:5000/profs/')
                .then(res => {
                    this.setState({listeprofs:res.data.data})
                     console.log("listprof",res.data.data[0].id_Prof)
                   

                    console.log(res.data.data)   
                }) 
                .catch((error) => {
                    console.log(error);
                })
      
    
        }

        onSubmit(e) {
            e.preventDefault();
            console.log('********!!!!!!!!!!**************!!!!!!!!!!!!*');
            const module = {
                nom_module: this.state.nom_module,
                nbrHeur: this.state.nbrHeur,
                selectProf: this.state.selectProf,
                selectFiliere: this.state.selectFiliere
                              
            }

            console.log(module)
           

            const isValid=this.validate();  
            if(isValid){
                console.log(module);
                addmodule(module).then(res => {
                console.log("il est envoyer");
                this.setState(initailState);
                this.setState({
                    addS: "Module Ajouté"
                })
                  })
                
            }else{
                console.log("il a un probleme dans la validation des informations")
            }
                     
    }
    annuler(e){
        history.push('/modules');
        window.location.reload(false); 
    }
  
    render() {
        return (
            <div className="db">
               
                
                    <form onSubmit={this.onSubmit} class="text border border-light p-5">
                    <div className={this.state.addS == null  ? 'hidden' : ''} >
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong > {this.state.addS}</strong> 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    </div> 
                    <b>Ajouter un module</b>
                    <hr/>   
                    <div class="form-group">
                        <div className="col-md-6">
                                <label>Nom de module: </label>
                                <input type="text"
                                    required
                                    placeholder="Nom de module"
                                    className="form-control"
                                    value={this.state.nom_module}
                                    onChange={this.onChangeNom_module}
                                />
                                <div style={{color:"red"}}>{this.state.nom_moduleEror}</div>
                            </div>
                            
                    </div>
                    <div class="form-group">
                    <div className="col-md-6">
                                <label>Nombre d'heur: </label>
                                <input type="text"
                                    required
                                    placeholder="Nombre d'heur"
                                    className="form-control"
                                    value={this.state.nbrHeur}
                                    onChange={this.onChangeNbrHeur}
                                />
                                <div style={{color:"red"}}>{this.state.nbrHeurEror}</div>
                            </div>
                            
                    </div>
                    <div class="form-group">
                             <div className="col-md-6">
                             <label for="selectfiliere">Filiere : </label>
                                <select name="listefilieres" 
                                    id="selactfiliere"
                                     value={this.state.selectFiliere}
                                         onChange={this.onChangeSelectFiliere} class="form-control ">
                                        {this.state.listefilieres.map((listefilieres) =>
                                             <option value={listefilieres.id_Filiere}>{listefilieres.name}</option>
                                        )}
                                                        
                                  </select>
                                  <div style={{color:"red"}}>{this.state.selectFiliereEror}</div>
                            </div>
                           

                     </div>
                    
                    <div class="form-group">
                             <div className="col-md-6">
                             <label>Professeur: </label>
                                <select name="listeprofs" 
                                     value={this.state.selectProf}
                                         onChange={this.onChangeSelectProf} class="form-control ">
                                        {this.state.listeprofs.map((listeprofs) =>
                                             <option value={listeprofs.id_Prof}>{listeprofs.first_name}</option>
                                        )}
                                                        
                                    
                                    </select>
                            </div>
                     </div>
              
                    <div className="col-md-12">
                    <button type="button" class="btn btn-success" onClick={this.onSubmit}>Ajouter</button> 
                    <button type="button" class="btn btn-danger" onClick={this.annuler} >Annuler</button>   
                    </div>
                    </form>
      
      </div>
        
        )
    }
}