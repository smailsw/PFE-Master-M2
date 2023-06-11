import React, { Component } from 'react'
import Axios from 'axios';
import history from '../history';


const initailState ={
    nom_module:'',
    nbrHeur:'',
    selectProf: '',
    selectFiliere: '',
    listeprofs:[],
    listefilieres:[],
        
    nom_moduleEror:'',
    nbrHeurEror:'',
    
}
export default class EditModule extends Component {
    constructor(props) {
        super(props);
        this.onChangeNom_module = this.onChangeNom_module.bind(this);
        this.onChangeNbrHeur = this.onChangeNbrHeur.bind(this);
        this.onChangeSelectProf = this.onChangeSelectProf.bind(this);
        this.onChangeSelectFiliere = this.onChangeSelectFiliere.bind(this);

        

        
       this.onClick = this.onClick.bind(this);

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
           
            if(!this.state.nom_module){
                nom_moduleEror="le champ Nom de module est obligatiore"
            }
            if(!this.state.nbrHeur){
                nbrHeurEror="le champ nombre d'heur est obligatiore"
            }
                       
            if(nom_moduleEror||nbrHeurEror){
                this.setState({nom_moduleEror,nbrHeurEror});
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
            Axios.get('http://localhost:5000/modules/' + this.props.match.params.id)
                .then(res => {
                    console.log("res.data",res.data)
                    this.setState({
                        nom_module: res.data.name,
                        nbrHeur: res.data.nbrHeur,
                        selectProf: res.data.id_Prof,
                        selectFiliere: res.data.id_Filiere
                    
                       
                    })
                    console.log(res.data )
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        
        onClick() {
            console.log('********!!!!!!!!!!**************!!!!!!!!!!!!*');
            const module = {
                name: this.state.nom_module,
                nbrHeur: this.state.nbrHeur,
                id_Prof: this.state.selectProf,
                id_Filiere: this.state.selectFiliere
                
               
            }
            console.log(module)
           

            const isValid=this.validate();  
            if(isValid){
                console.log(module)

                Axios.put('http://localhost:5000/modules/' + this.props.match.params.id, module)
                .then(res => console.log(res.data));
                alert("module a est modifié")
                this.props.history.push('/modules')
                
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
                <b>Modifier un module </b>
                    <hr/>   
                    <div class="form-group">
                        <div className="col-md-6">
                                <label>Nom de module: </label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.nom_module}
                                    onChange={this.onChangeNom_module}
                                />
                                <div style={{color:"red"}}>{this.state.nom_moduleEror}</div>
                            </div>
                            
                    </div>
                    <div class="form-group">
                    <div className="col-md-6">
                                <label>Nombre d'heures: </label>
                                <input type="text"
                                    required
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
                    {<button type="button" class="btn btn-success" onClick={()=>this.onClick()}>Modifier</button> }
                    <button type="button" class="btn btn-danger" onClick={this.annuler} >Annuler</button>   
                    </div>
                
                </form>
      
      </div>
        
        )
    }
}







