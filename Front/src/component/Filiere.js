import React, { Component } from 'react'

import Axios from 'axios';


import history from '../history';


export default class Filiere extends Component {
    
    constructor(props) {
        super(props);
        this.OnchangeState=this.OnchangeState.bind(this);

        this.state = {
            val:'',
            filieres: [],
            listFilter: []
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/filieres/')
            .then(res => {
                this.setState({ filieres: res.data.data,
                    listFilter:res.data.data})
               console.log('filiere',res.data.data)   
            }) 
            .catch((error) => {
                console.log(error);
            })

           

    }
    
    addFiliere(url){
    console.log('ici ------------')
    history.push(url) ;
    window.location.reload(false);
}
onClick(id_Filiere){
    console.log('go----------------->')
    history.push('/EditFiliere/'+id_Filiere)
    window.location.reload(false);

    
}

deleteFiliere(id_Filiere) {
    console.log(id_Filiere)
    Axios.delete('http://localhost:5000/filieres/delete/' + id_Filiere)
        .then(res => console.log(res.data))
        .then(
                       
        )
        alert("Vous êtes sur de supprimer cette Filière ?!")
            window.location.reload(false);
            console.log("ici*************************")
    
}

    OnchangeState(e){
        this.setState({
            
            val:e.target.value,
    
        },()=>{
            this.setState({
                listFilter:this.state.filieres.filter(elm=>(elm.name.includes(this.state.val)))
                })
            }
        )
        console.log(this.state.val)
    }
    render() {

        const filiere = Array.isArray(this.state.listFilter) && this.state.listFilter.map(filiere => {

                return(
            <tr key={filiere.id_Filiere}>
                <td>{filiere.name}</td>
                <td>{filiere.abreviation}</td>
                
                <td>
                
                     <button className="btn" onClick={()=>this.onClick(filiere.id_Filiere)}>
                         <i className="fa fa-pencil-square-o" aria-hidden="true"><img src="https://img.icons8.com/color/30/000000/edit-property.png" alt=""/></i>
                     </button>
                
                    <button className="btn" 
                     onClick={() => { this.deleteFiliere(filiere.id_Filiere) }}>
                         <i className="fa fa-trash-o" ><img src="https://img.icons8.com/plasticine/30/000000/filled-trash.png" alt=""/></i>
                    </button>
                    
                </td>
                
            </tr>
)
  })
        return (
          <div  className="db">
              <h3 className="roboto">La liste des filières </h3>
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
                         style={{float: "right", margin: "0px"}}
                             >
                   <i className="fa fa-trash-o" 
                    
                    onClick={() => this.addFiliere('/addFiliere')}> 
                   <img src="https://img.icons8.com/nolan/40/add.png" alt=""/></i>
               </button>
                   </div>
                </div>
                <hr/>
              
                <div>
                    
                    <table className="table table-bordered" >
                        <thead className="thead-light">
                            <tr>
                               
                                <th>Nom de Filière</th>
                                <th>Abreviation</th>
                                                              
                                
                                <th>Action</th>
                                                                
                            </tr>
                        </thead>
                        <tbody>
                            {filiere}
                        </tbody>
                    </table>
                </div>
           
             </div>
             
        )
        }
    }
                                               