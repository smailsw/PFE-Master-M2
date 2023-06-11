import React, { Component } from 'react'
import {addseance} from '../service/serviceAddseance';
import Axios from 'axios';
import history from '../history';



const initailState ={
    date_Seance: '',
    heurDebut:'',
    heurFin: '',
    selectModule: '',
    listemodules:[],
    type_Seance:'',
    
    selectFiliere: '',
    listefilieres:[],
        
    date_SeanceEror:'',
    heurDebutEror:'',
    heurFinEror:'',
    type_SeanceEror:'',
    selectModuleEror: '',
    selectFiliereEror: '',
    addS: null

    
}
export default class addSeance extends Component {
    constructor(props) {
        super(props);
        this.onChangeDate_Seance = this.onChangeDate_Seance.bind(this);
        this.onChangeHeurDebut = this.onChangeHeurDebut.bind(this);
        this.onChangeHeurFin = this.onChangeHeurFin.bind(this);
        this.onChangeSelectModule = this.onChangeSelectModule.bind(this);
        this.onChangeType_Seance = this.onChangeType_Seance.bind(this);
        this.onChangeSelectFiliere = this.onChangeSelectFiliere.bind(this);

    
            
        this.onSubmit = this.onSubmit.bind(this);

        this.state=initailState;


        }
         
        onChangeDate_Seance(e) {
            this.setState({
                date_Seance: e.target.value
            });
        }
        onChangeHeurDebut(e) {
            this.setState({
                heurDebut: e.target.value
            });
        }
        onChangeHeurFin(e) {
            this.setState({
                heurFin: e.target.value
            });
        }
        onChangeSelectModule(e) {
            this.setState({
                selectModule: e.target.value
            });
        }
        onChangeType_Seance(e) {
            this.setState({
                type_Seance: e.target.value
            });
        }
        onChangeSelectFiliere(e) {
            this.setState({
                selectFiliere: e.target.value
            });
        }

        /*la fonction de validation */
       
        validate =()=>{
            let date_SeanceEror="";
            let heurDebutEror="";
            let heurFinEror="";
            let selectModuleEror="";
            let type_SeanceEror="";
            let selectFiliereEror="";
           
            if(!this.state.date_Seance){
                date_SeanceEror="le champ date de seabnce est obligatiore"
            }
            if(!this.state.heurDebut){
                heurDebutEror="le champ heur de debut est obligatiore"
            }
            if(!this.state.heurFin){
                heurFinEror="le champ heur de fin est obligatiore"
            }
            if(!this.state.selectModule){
                selectModuleEror="le champ module est obligatiore"
            }
            if(!this.state.type_Seance){
                type_SeanceEror="le champ type de séance est obligatiore"
            }
            if(!this.state.selectFiliere){
                selectFiliereEror="le champ filiere est obligatiore"
            }
                       
            if(date_SeanceEror||heurDebutEror||heurFinEror||selectModuleEror||type_SeanceEror||selectFiliereEror){
                this.setState({date_SeanceEror,heurDebutEror,heurFinEror,selectModuleEror,type_SeanceEror,selectFiliereEror});
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

            Axios.get('http://localhost:5000/modules/')
                .then(res => {
                    this.setState({listemodules:res.data.data})
                     console.log("listmodule",res.data.data)
                   

                    console.log(res.data.data)   
                }) 
                .catch((error) => {
                    console.log(error);
                });
              
    
        }

        onSubmit(e) {
            //e.preventDefault();
            console.log('********!!!!!!!!!!**************!!!!!!!!!!!!*');
            const seance = {
                date_Seance: this.state.date_Seance,
                heurDebut: this.state.heurDebut,
                heurFin:this.state.heurFin,
                type_Seance:this.state.type_Seance,
                selectModule:this.state.selectModule,
                selectFiliere:this.state.selectFiliere,                              
            }

            console.log(seance)
           

            const isValid=this.validate();  
            if(isValid){
                console.log('seance add');
                addseance(seance).then(res => {
                console.log("il est envoyer");
                 this.setState(initailState);
                 this.setState({
                     addS: "Séance Ajouté"
                 })
                  })
                
            }else{
                console.log("il a un probleme dans la validation des informations")
            }
                     
    }
    annuler(e){
        history.push('/seances');
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
                    <b>Ajouter une Séance</b>
                    <hr/>
                    <div class="row">
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
                            

                     
                             <div className="col-md-6">
                             <label for="selectmodule">module : </label>
                                <select name="listemodules" 
                                    id="selactmodule"
                                     value={this.state.selectModule}
                                         onChange={this.onChangeSelectModule} class="form-control ">
                                        {this.state.listemodules.map((listemodules) =>
                                             <option value={listemodules.id_Module}>{listemodules.name}</option>
                                        )}
                                                        
                                  </select>
                                  <div style={{color:"red"}}>{this.state.selectModuleEror}</div>
                            </div>
                            

                     </div>
                    
                    <div class="row">
                        <div className="col-md-6">
                                <label>date de seance: </label>
                                <input type="date"
                                    required
                                    className="form-control"
                                    value={this.state.date_Seance}
                                    onChange={this.onChangeDate_Seance}
                                />
                                <div style={{color:"red"}}>{this.state.date_SeanceEror}</div>
                            </div>
                            
                    
                    <div className="col-md-6">
                                <label>Heur de debut: </label>
                                <input type="time"
                                    required
                                    className="form-control"
                                    value={this.state.heurDebut}
                                    onChange={this.onChangeHeurDebut}
                                />
                                <div style={{color:"red"}}>{this.state.heurDebutEror}</div>
                            </div>
                            
                    </div>
                    
                    <div class="row">
                        <div className="col-md-6">
                                <label>Heur de fin: </label>
                                <input type="time"
                                    required
                                    className="form-control"
                                    value={this.state.heurFin}
                                    onChange={this.onChangeHeurFin}
                                />
                                <div style={{color:"red"}}>{this.state.heurFinEror}</div>
                            </div>
      
                             <div className="col-md-6">
                             <label for="typeSeance">Type de Seance</label>
                                    <select
                                    value={this.state.type_Seance}
                                    onChange={this.onChangeType_Seance}
                                    class="form-control" id="typeSeance">
                                            <option>Cour</option>
                                            <option>TP</option>
                                            <option>TD</option>
                                            
                                    </select>
                                    <div style={{color:"red"}}>{this.state.type_SeanceEror}</div>
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