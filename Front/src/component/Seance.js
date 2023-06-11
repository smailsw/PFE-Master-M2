import React, { Component } from 'react'

import Axios from 'axios';
import ChartAbsenceModule from '../charts/ChartAbsenceModule'

import history from '../history';

// const db =[]; 
export default class Seance extends Component {
    
    constructor(props) {
        super(props);
        this.OnchangeState=this.OnchangeState.bind(this);

        this.state = {
            val:'',
            seances: [],
            seances1: [],
            listFilter: [],
            listFilter1: [],
            db: [],
        };
    }

    componentDidMount() {
            console.log('localStorage.getItem()',localStorage.getItem('user'));
            const idProf= localStorage.getItem('user');
                    Axios.get('http://localhost:5000/seances')
                    .then(res => {
                        for (let index = 0; index < res.data.data.length; index++) {
                            console.log('id prof', res.data.data[index].id_Prof)
                            console.log('id filiere', res.data.data[index].id_Filiere)
                            if (res.data.data[index].id_Module===1) {
                                res.data.data[index].id_Module= "Java"
                            }
                            if (res.data.data[index].id_Module===2) {
                                res.data.data[index].id_Module= "Web"
                            }
                            if (res.data.data[index].id_Module===3) {
                                res.data.data[index].id_Module= "Reseaux"
                            }
                            if (res.data.data[index].id_Module===4) {
                                res.data.data[index].id_Module= "UML"
                                
                            }
                            if (res.data.data[index].id_Module===5) {
                                res.data.data[index].id_Module= "TEC"
                                
                            }
        
                            
                            console.log('id prof *******', res.data.data[index].id_Prof)
                            
                        }
                        this.setState({ seances: res.data.data,
                            listFilter:res.data.data})
                       console.log('seances -------------------->',res.data)   
                    }) 
                    .catch((error) => {
                        console.log(error);
                    })
    
            
    }
    
    addSeance(url){
    console.log('ici ------------')
    history.push(url) ;
    window.location.reload(false);
}
onClick(id_Seance){
    console.log('go----------------->')
    history.push('/EditSeance/'+id_Seance)
    window.location.reload(false);
   
}
addAbsence(id_Seance){
    console.log('go----------------->')
    history.push('/addAbsence/'+id_Seance)
    window.location.reload(false);
   
}

deleteSeance(id_Seance) {
    console.log(id_Seance)
    Axios.delete('http://localhost:5000/seances/delete/' + id_Seance)
        .then(res => console.log(res.data))
        .then(              
        )
        alert("Vous êtes sur de supprimer cette séance ?!")
            window.location.reload(false);
            console.log("ici*************************")
    
}

    OnchangeState(e){
        this.setState({
            
            val:e.target.value,
    
        },()=>{
            this.setState({
                listFilter:this.state.seances.filter(elm=>(elm.nom.includes(this.state.val)))
                })
            }
        )
        console.log(this.state.val)
    }
    render() {

        const seance = Array.isArray(this.state.listFilter) && this.state.listFilter.map(seance => {

                return(
            <tr key={seance._id_Seance}>
                {/* <td>{seance.id_Seance}</td> */}
                <td>{seance.date_Seance}</td>
                <td>{seance.heurDebut}</td>
                <td>{seance.heurFin}</td>
                <td>{seance.type_Seance}</td>
                <td>{seance.id_Module}</td>

                <td>
                     <button className="btn" onClick={()=>this.onClick(seance.id_Seance)}>
                     <i className="fa fa-pencil-square-o" aria-hidden="true"><img src="https://img.icons8.com/color/30/000000/edit-property.png" alt=""/></i>
                     </button>
                
                    <button className="btn" 
                     onClick={() => { this.deleteSeance(seance.id_Seance) }}>
                         
                          <i className="fa fa-trash-o" ><img src="https://img.icons8.com/plasticine/30/000000/filled-trash.png" alt=""/></i>
                    </button> 
                    <button className="btn" onClick={()=>this.addAbsence(seance.id_Seance)}>
                         <i className="fa fa-pencil-square-o" aria-hidden="true"><img src="https://img.icons8.com/cute-clipart/30/000000/add-property.png" alt=""/></i>
                </button>  
                </td> 
            </tr>
)
  })
        return (
          <div className="db">
              <h3 className="roboto">La liste des séances</h3>
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
                             onClick={() => this.addSeance('/addSeance')}> 
                   <img src="https://img.icons8.com/nolan/40/add.png" alt=""/></i>
               </button>
                   </div>
                </div>
                <hr/>
             
                <div>
                    
                    <table className="table border table-bordered">
                        <thead className="thead-light">
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Date de seance</th>
                                <th>Heur debut</th>
                                <th>Heur fin</th>
                                <th>Type de Séance</th>
                                <th>Module</th>
                             
                                <th>Action</th>
                                                                
                            </tr>
                        </thead>
                        <tbody>
                            {seance}
                        </tbody>
                    </table>
                </div>
          
             </div>
             
        )
        }
    }
                                               