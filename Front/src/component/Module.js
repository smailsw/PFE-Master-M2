import React, { Component } from 'react'

import Axios from 'axios';


import history from '../history';


export default class Module extends Component {
    
    constructor(props) {
        super(props);
        this.OnchangeState=this.OnchangeState.bind(this);

        this.state = {
            val:'',
            modules: [],
            listFilter: [],

        };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/modules/')
            .then(res => {
                for (let index = 0; index < res.data.data.length; index++) {
                    console.log('id prof', res.data.data[index].id_Prof)
                    console.log('id filiere', res.data.data[index].id_Filiere)
                    if (res.data.data[index].id_Prof===13) {
                        res.data.data[index].id_Prof= "Massin"
                    }
                    if (res.data.data[index].id_Prof===14) {
                        res.data.data[index].id_Prof= "Yoba"
                    }
                    if (res.data.data[index].id_Prof===16) {
                        res.data.data[index].id_Prof= "Ayyour"
                    }
                    if (res.data.data[index].id_Filiere===1) {
                        res.data.data[index].id_Filiere= "GI"
                        
                    }

                    if (res.data.data[index].id_Filiere===2) {
                        res.data.data[index].id_Filiere= "GE"
                        
                    }
                    if (res.data.data[index].id_Filiere===4) {
                        res.data.data[index].id_Filiere= "ISIL"
                        
                    }
                    console.log('id prof *******', res.data.data[index].id_Prof)
                    
                }
                this.setState({ modules: res.data.data,
                    listFilter:res.data.data})
               console.log('*********************************',res.data.data)   
            }) 
            .catch((error) => {
                console.log(error);
            })

           

    }
    
    addModule(url){
    console.log('ici ------------')
    history.push(url) ;
    window.location.reload(false);
}
onClick(id_Module){
    console.log('go----------------->')
    history.push('/EditModule/'+id_Module)
    window.location.reload(false);

    
}

deleteModule(id_Module) {
    console.log(id_Module)
    Axios.delete('http://localhost:5000/modules/delete/' + id_Module)
        .then(res => console.log(res.data))
        .then(
                       
        )
        alert("Vous êtes sur de supprimer ce module ?!")
            window.location.reload(false);
            console.log("ici*************************")
    
}

    OnchangeState(e){
        this.setState({
            
            val:e.target.value,
    
        },()=>{
            this.setState({
                listFilter:this.state.modules.filter(elm=>(elm.name.includes(this.state.val)))
                })
            }
        )
        console.log(this.state.val)
    }
    render() {

        const module = Array.isArray(this.state.listFilter) && this.state.listFilter.map(module => {

                return(
            <tr key={module._id_Module}>
               
                <td>{module.name}</td>
                <td>{module.nbrHeur}</td>
                <td>{module.id_Prof}</td>
                <td>{module.id_Filiere}</td>

                
                <td>
                
                     <button className="btn" onClick={()=>this.onClick(module.id_Module)}>
                         <i className="fa fa-pencil-square-o" aria-hidden="true"><img src="https://img.icons8.com/color/30/000000/edit-property.png" alt=""/></i>
                     </button>
                
                    <button className="btn" 
                     onClick={() => { this.deleteModule(module.id_Module) }}>
                         <i className="fa fa-trash-o" ><img src="https://img.icons8.com/plasticine/30/000000/filled-trash.png" alt=""/></i>
                    </button>
                    
                </td>
                
            </tr>
)
  })
        return (
          <div className="db">
               <h2 className="roboto">La liste des modules</h2>
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
                    
                    onClick={() => this.addModule('/addModule')}> 
                   <img src="https://img.icons8.com/nolan/40/add.png" alt=""/></i>
               </button>
                   </div>
                </div>
                <hr/>
              
              
                <div>
                   
                    <table className="table table-bordered" >
                        <thead className="thead-light">
                            <tr>
                                
                                <th>Nom de module</th>
                                <th>Nombre d'heures</th>
                                <th>Professeur</th>
                                <th>Filière</th>
                                <th>Action</th>                                   
                            </tr>
                        </thead>
                        <tbody>
                            {module}
                        </tbody>
                    </table>
                </div>
           
             </div>
             
        )
        }
    }
                                               