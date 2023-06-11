import React, { Component } from 'react'

import Axios from 'axios';
import '../css/style1.css'

import history from '../history';


export default class Etudiant extends Component {
    
    constructor(props) {
        super(props);
        this.OnchangeState=this.OnchangeState.bind(this);

        this.state = {
            val:'',
            etudiants: [],
            listFilter: [],
            nomFiliere: []
        };
    }

    componentDidMount() {
        

        Axios.get('http://localhost:5000/etudiants/')
            .then(res => {
                // var et = res.data.data;
                // var rt = res.data.data;
                this.setState({ etudiants: res.data.data,
                    listFilter:res.data.data})

               for (let i = 0; i < res.data.data.length; i++) {
                   const id = res.data.data[i].id_Filiere;
                   console.log('id/*//*/***************>>>>>>>', id);
                   Axios.get('http://localhost:5000/filieres/'+ id)
            .then(res => {
                    this.setState({
                        nomFiliere: res.data.abreviation,
                       
                    })
                    console.log('name----------------------->', res.data.abreviation)
                    console.log('stata---------------------->', this.state.nomFiliere);
                    
           
            })  
               }
               console.log('stata---------------------->', this.state.nomFiliere);
              
                }) 
            .catch((error) => {
                console.log(error);
            })
          

    }
   
    
    addEtudiant(url){
    console.log('ici ------------')
    history.push(url) ;
    window.location.reload(false);
    }
    addListeEtudiant(url){
        history.push(url) ;
        window.location.reload(false);
        }
    onClick(Id_Etudiant){
        console.log('go----------------->')
        history.push('/EditEtudiant/'+Id_Etudiant)
        window.location.reload(false);

        
    }

deleteEtudiant(id_Etudiant) {
    console.log(id_Etudiant)
    Axios.delete('http://localhost:5000/etudiants/delete/' + id_Etudiant)
        .then(res => console.log(res.data))
        .then(
                       
        )
        alert("Vous êtes sur de supprimer ce étudiant ?!")
            window.location.reload(false);
            console.log("ici*************************")
    
}

    OnchangeState(e){
        this.setState({
            val:e.target.value,
    
        },()=>{
            this.setState({
                listFilter:this.state.etudiants.filter(elm=>(elm.last_name.includes(this.state.val)))
                })
            }
        )
        console.log(this.state.val)
    }
    render() {

        const etudiant = Array.isArray(this.state.listFilter) && this.state.listFilter.map(etudiant => {

                return(
            <tr key={etudiant.id_Etudiant}>
                
                <td>{etudiant.last_name}</td>
                <td>{etudiant.first_name}</td>
                <td>{etudiant.email}</td>
                <td>{etudiant.adresse}</td>
                <td>{etudiant.sexe}</td>
                <td>{etudiant.cin}</td>
                <td>{etudiant.date_naissance}</td>
                <td>{etudiant.telephone}</td>
                <td>{this.state.nomFiliere}</td>


                <td>
                
                     <button className="btn" onClick={()=>this.onClick(etudiant.id_Etudiant)}>
                         <i className="fa fa-pencil-square-o" aria-hidden="true"><img src="https://img.icons8.com/color/30/000000/edit-user-male--v1.png" alt=""/></i>
                     </button>
                
                    <button className="btn" 
                     onClick={() => { this.deleteEtudiant(etudiant.id_Etudiant) }}>
                         <i className="fa fa-trash-o" ><img src="https://img.icons8.com/plasticine/30/000000/filled-trash.png" alt=""/></i>
                    </button>
                    
                </td>
                
            </tr>
)
  })
        return (
          <div className="db" >
              <h2 className="roboto">La liste des étudiants</h2>
               <hr/>
                <div className="row">
                        <div className="col-sm-10">
                            <nav className="navbar navbar-light bg-light">                
                                 <input className="form-control mr-sm-2 "  type="search" placeholder="Recherche par Nom" 
                                    value={this.state.val} onChange={(e)=>{this.OnchangeState(e)}} />
                            </nav>
                    </div>
                <div className="col-sm-1">
                      <button  class="btn"
                         style={{float: "right", margin: "0px"}}
                            >
                   <i className="fa fa-trash-o" 
                    onClick={() => this.addEtudiant('/addEtudiant')}> 
                   <img src="https://img.icons8.com/fluent/40/000000/add-user-male.png" alt=""/></i>
                     </button>
                   </div>
                <div className="col-sm-1">
                      <button  class="btn"
                         style={{float: "right", margin: "0px"}}
                             >
                   <i className="fa fa-trash-o" 
                    
                    className="db"
                    onClick={() => this.addListeEtudiant('/addListeEtudiant')}> 
                  <img src="https://img.icons8.com/fluent/40/000000/add-file.png" alt=""/></i>
               </button>
                </div>
                </div>
                <hr/>
                
                    <table className="table table-bordered" >
                        <thead className="thead-light">
                            <tr >
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Email</th>
                                <th>Adresse</th>
                                <th>Sexe</th>
                                <th>CIN</th>
                                <th>Date de naissance</th>
                                
                                <th>Téléphone</th>
                                <th>Filiere</th>
                                <th>Action</th>
                                                                
                            </tr>
                        </thead>
                        <tbody>
                            {etudiant}
                        </tbody>
                    </table>
              
               
                    
                    
           
             </div>
             
        )
        }
    }
                                               