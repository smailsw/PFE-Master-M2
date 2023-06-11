import React, { Component } from 'react'
import Axios from 'axios';
import history from '../history';


const initailState ={
    date_Seance: '',
    heurDebut:'',
    heurFin: '',
    selectModule: '',
    listemodules:[],
    selectFiliere: '',
    listefilieres:[],
    type_Seance:'',
    
        
    date_SeanceEror:'',
    heurDebutEror:'',
    heurFinEror:'',
    type_SeanceEror:'',
    selectModuleEror: '',
    
}
export default class EditSeance extends Component {
    constructor(props) {
        super(props);
        this.onChangeDate_Seance = this.onChangeDate_Seance.bind(this);
        this.onChangeHeurDebut = this.onChangeHeurDebut.bind(this);
        this.onChangeHeurFin = this.onChangeHeurFin.bind(this);
        this.onChangeSelectFiliere = this.onChangeSelectFiliere.bind(this);
        this.onChangeSelectModule = this.onChangeSelectModule.bind(this);
        this.onChangeType_Seance = this.onChangeType_Seance.bind(this);

        

        
       this.onClick = this.onClick.bind(this);

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
        onChangeSelectFiliere(e) {
            this.setState({
                selectFiliere: e.target.value
            });
        }
        onChangeType_Seance(e) {
            this.setState({
                type_Seance: e.target.value
            });
        }
        
        

        /*la fonction de validation */
       
        validate =()=>{
            let date_SeanceEror="";
            let heurDebutEror="";
            let heurFinEror="";
            let selectModuleEror="";
            let type_SeanceEror="";
           
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
                       
            if(date_SeanceEror||heurDebutEror||heurFinEror||selectModuleEror||type_SeanceEror){
                this.setState({date_SeanceEror,heurDebutEror,heurFinEror,selectModuleEror,type_SeanceEror});
                return false;
            }

            return true;
            
        }

        componentDidMount() {
            Axios.get('http://localhost:5000/modules/')
            .then(res => {
                this.setState({listemodules:res.data.data})
                 console.log("listmodule",res.data.data)
               

                console.log(res.data.data)   
            }) 
            .catch((error) => {
                console.log(error);
            })
            Axios.get('http://localhost:5000/filieres/')
            .then(res => {
                this.setState({listefilieres:res.data.data})
                 console.log("listefilieres",res.data.data)
               

                console.log(res.data.data)   
            }) 
            .catch((error) => {
                console.log(error);
            })

            Axios.get('http://localhost:5000/seances/' + this.props.match.params.id)
                .then(res => {
                    console.log("res.data.id",res.data)
                    this.setState({
                        date_Seance: res.data.date_Seance,
                        heurDebut: res.data.heurDebut,
                        heurFin: res.data.heurFin,
                        type_Seance: res.data.type_Seance,
                        selectModule: res.data.id_Module,
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
            const seance = {
                date_Seance: this.state.date_Seance,
                heurDebut: this.state.heurDebut,
                heurFin:this.state.heurFin,
                type_Seance:this.state.type_Seance,
                id_Module:this.state.selectModule,
                id_Filiere: this.state.selectFiliere

                
               
            }
            console.log(seance)
           

            const isValid=this.validate();  
            if(isValid){
                console.log(seance)

                Axios.put('http://localhost:5000/seances/' + this.props.match.params.id, seance)
                .then(res => console.log(res.data));
                alert("seance a est modifié")
                this.props.history.push('/seances')
                
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
                             <label for="selectmodule">Module : </label>
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
                                <label>Date de seance: </label>
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
                     {<button style={{float:"right"}} type="button" class="btn btn-success" onClick={()=>this.onClick()} >Modifier</button>}
                    <button style={{float:"right"}} type="button" class="btn btn-danger" onClick={this.annuler} >Annuler</button>   
                    </div>
                    </form>

              
      </div>
        
        )
    }
}







