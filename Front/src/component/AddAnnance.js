import React, { Component } from 'react'
import Axios from 'axios';
import history from '../history';
import { addannance } from '../service/serviceAddannance';



const initailState ={
    sujet:'',
    desc:'',
    selectFiliere: '',
    listefilieres:[],
        
    sujetEror:'',
    descEror:'',
    selectFiliereEror:'',
    addS: null

    
}
export default class AddAnnance extends Component {
    constructor(props) {
        super(props);
        this.onChangeSujet = this.onChangeSujet.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeSelectFiliere = this.onChangeSelectFiliere.bind(this);
    
        this.onSubmit = this.onSubmit.bind(this);

        this.state=initailState;


        }
         
        onChangeSujet(e) {
            this.setState({
                sujet: e.target.value
            });
        }
        onChangeDesc(e) {
            this.setState({
                desc: e.target.value
            });
        }
        
        onChangeSelectFiliere(e) {
            this.setState({
                selectFiliere: e.target.value
            });
        }
        

        /*la fonction de validation */
       
        validate =()=>{
            let sujetEror="";
            let descEror="";
            let selectFiliereEror="";
           
            if(!this.state.sujet){
                sujetEror="le champ Sujet de l'annonce est obligatiore"
            }
            if(!this.state.desc){
                descEror="le champ Description de l'annonce est obligatiore"
            }
            if(!this.state.selectFiliere){
                selectFiliereEror="le champ filiere est obligatiore"
            }
                       
            if(sujetEror||descEror||selectFiliereEror){
                this.setState({sujetEror,descEror,selectFiliereEror});
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
           
      
    
        }

        onSubmit(e) {
            e.preventDefault();
            console.log('********!!!!!!!!!!**************!!!!!!!!!!!!*');
            const annance = {
                sujet: this.state.sujet,
                desc: this.state.desc,
                selectFiliere: this.state.selectFiliere
                              
            }

            const isValid=this.validate();  
            if(isValid){
                console.log(annance);
                addannance(annance).then(res => {
                console.log("il est envoyer");
                this.setState(initailState);
                this.setState({
                    addS: "Annonce Ajouté"
                })
                 
                  })
                
            }else{
                console.log("il a un probleme dans la validation des informations")
                
            }
                     
    }
    annuler(e){
        history.push('/annances');
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
                    <b>Ajouter une annonce</b>
                    <hr/>   
                    <div class="form-group">
                        <div className="col-md-6">
                                <label>Sujet: </label>
                                <input type="text"
                                    required
                                    placeholder="Sujet"
                                    className="form-control"
                                    value={this.state.sujet}
                                    onChange={this.onChangeSujet}
                                />
                                <div style={{color:"red"}}>{this.state.sujetEror}</div>
                            </div>
                            
                    </div>
                    <div class="form-group">
                    <div className="col-md-6">
                         <label for="exampleFormControlTextarea1">Description:</label>
                            <textarea
                             class="form-control"
                             id="exampleFormControlTextarea1" 
                             rows="3" 
                             placeholder="Description"
                             value={this.state.desc}
                             onChange={this.onChangeDesc}></textarea>
                                <div style={{color:"red"}}>{this.state.descEror}</div>
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
                    
            
              
                    <div className="col-md-12">
                    <button type="button" class="btn btn-success" onClick={this.onSubmit}>Ajouter</button> 
                    <button type="button" class="btn btn-danger" onClick={this.annuler} >Annuler</button>   
                    </div>
                    </form>
      
      </div>
        
        )
    }
}