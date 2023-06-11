import React, { Component } from 'react'

import Axios from 'axios';


import history from '../history';


export default class Annances extends Component {
    
    constructor(props) {
        super(props);
        this.OnchangeState=this.OnchangeState.bind(this);

        this.state = {
            val:'',
            annances: [],
            listFilter: [],
            NomFiliere: ''
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/annances/')
            .then(res => {
                this.setState({ annances: res.data.data,
                    listFilter:res.data.data})
               console.log('annances----->',res.data.data)   
            }) 
            .catch((error) => {
                console.log(error);
            })
            // console.log('this.state.annances.id_Filiere',this.state.annances.id_Filiere);
            
            Axios.get('http://localhost:5000/filieres/' + 2)
            .then(res => {
                this.setState({ NomFiliere: res.data.abreviation,
                   })
                   console.log('filieres------>',res.data);
                   
             console.log('this.state.NomFiliere------->',this.state.NomFiliere)   
            }) 
            .catch((error) => {
                console.log(error);
            })

           

    }
    
    addAnnance(url){
    console.log('ici ------------')
    history.push(url) ;
    window.location.reload(false);
}


deleteAnnance(id_Annance) {
    console.log(id_Annance)
    Axios.delete('http://localhost:5000/annances/delete/' + id_Annance)
        .then(res => console.log(res.data))
        .then(
                       
        )
        alert("Vous êtes sur de supprimer ce annance ?!")
            window.location.reload(false);
            console.log("ici*************************")
    
}

    OnchangeState(e){
        this.setState({
            
            val:e.target.value,
    
        },()=>{
            this.setState({
                listFilter:this.state.annances.filter(elm=>(elm.sujet.includes(this.state.val)))
                })
            }
        )
        console.log(this.state.val)
    }
    render() {

        const annance = Array.isArray(this.state.listFilter) && this.state.listFilter.map(annance => {

                return(
            <tr key={annance._id_Annance}>
                
                <td>{annance.sujet}</td>
                <td>{annance.desc}</td>
                <td>{this.state.NomFiliere}</td>

                
                <td>
                
                    
                
                    <button className="btn" 
                     onClick={() => { this.deleteAnnance(annance.id_Annance) }}>
                         <i className="fa fa-trash-o" ><img src="https://img.icons8.com/plasticine/30/000000/filled-trash.png" alt=""/></i>
                    </button>
                    
                </td>
                
            </tr>
)
  })
        return (
          <div className="db">
              <hr/>
                    <div className="row">
                        <div className="col-sm-10">
                            <nav className="navbar navbar-light bg-light">                
                                 <input className="form-control mr-sm-2 "  type="search" placeholder="Recherche " 
                                    value={this.state.val} onChange={(e)=>{this.OnchangeState(e)}} />
                            </nav>
                    </div>
                      <div className="col-sm-2">
                      <button  class="btn"
                         style={{float: "right", margin: "0px"}}>
                          <i className="fa fa-trash-o" 
                              onClick={() => this.addAnnance('/AddAnnance')}> 
                   <img src="https://img.icons8.com/dusk/40/000000/add-reminder.png" alt=""/></i>
               </button>
                   </div>
                </div>
                <hr/>
              
                <div>
                    <h3>Liste des annonces</h3>
                    <table className="table table-bordered" >
                        <thead className="thead-light">
                            <tr>
                               
                                <th>Sujet</th>
                                <th>Description</th>
                                <th>Filière</th>
                                <th>Action</th>                                   
                            </tr>
                        </thead>
                        <tbody>
                            {annance}
                        </tbody>
                    </table>
                </div>
           
             </div>
             
        )
        }
    }
                                               