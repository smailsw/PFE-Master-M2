import React, { Component } from 'react'

import Axios from 'axios';

import '../css/admin.css'
import history from '../history';

import ChartSexe from '../charts/ChartSexe';


export default class Prof extends Component {
    
    constructor(props) {
        super(props);
        this.OnchangeState=this.OnchangeState.bind(this);

        this.state = {
            val:'',
            profs: [],
            listFilter: []
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/profs/')
            .then(res => {
                this.setState({ profs: res.data.data,
                    listFilter:res.data.data})
               console.log('profs---------->',this.state.profs)   
            }) 
            .catch((error) => {
                console.log(error);
            })

            console.log('profs-**--------->',this.state.profs)   

    }
    
    addProf(url){
    console.log('ici ------------')
    history.push(url) ;
    window.location.reload(false);
}
    addListeProf(url){
        history.push(url) ;
        window.location.reload(false);
    }
onClick(id_Prof){
    console.log('go----------------->')
    history.push('/EditProf/'+id_Prof)
    window.location.reload(false);
  
}

deleteProf(id_Prof) {
    console.log(id_Prof)
    Axios.delete('http://localhost:5000/profs/delete/' + id_Prof)
        .then(res => console.log(res.data))
        .then(
                       
        )
        alert("Vous êtes sur de supprimer cette professeur ?!")
            window.location.reload(false);
            console.log("ici*************************")
    
}

    OnchangeState(e){
        this.setState({
            
            val:e.target.value,
    
        },()=>{
            this.setState({
                listFilter:this.state.profs.filter(elm=>(elm.last_name.includes(this.state.val)))
                })
            }
        )
        console.log(this.state.val)
    }
    render() {

        const prof = Array.isArray(this.state.listFilter) && this.state.listFilter.map(prof => {

                return(
            <tr key={prof._id_Prof} className="db">
               
                <td >{prof.last_name}</td>
                <td >{prof.first_name}</td>
                <td >{prof.email}</td>
                <td >{prof.adresse}</td>
                <td >{prof.sexe}</td>
                <td >{prof.cin}</td>
                <td >{prof.telephone}</td>

                <td className="db">
                
                     <button className="btn " onClick={()=>this.onClick(prof.id_Prof)}>
                         <i className="fa fa-pencil-square-o" aria-hidden="true"><img src="https://img.icons8.com/color/30/000000/edit-user-male--v1.png" alt=""/></i>
                     </button>
                
                    <button className="btn" 
                     onClick={() => { this.deleteProf(prof.id_Prof) }}>
                         <i className="fa fa-trash-o" ><img src="https://img.icons8.com/plasticine/30/000000/filled-trash.png" alt=""/></i>
                    </button>
                    
                </td>
                
            </tr>
)
  })
        return (
          <div>
              <h3 className="roboto">La liste des professeurs</h3>
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
                    onClick={() => this.addProf('/addProf')}> 
                   <img src="https://img.icons8.com/fluent/40/000000/add-user-male.png" alt=""/></i>
               </button>
                   </div>
                   <div className="col-sm-1">
                      <button  class="btn"
                         style={{float: "right", margin: "0px"}}
                             >
                   <i className="fa fa-trash-o" 
                    
                    className="db"
                    onClick={() => this.addListeProf('/addListeProf')}> 
                  <img src="https://img.icons8.com/fluent/40/000000/add-file.png" alt=""/></i>
               </button>
                </div>
                </div>
                <hr/>

                <div>
                    
                    <table className="table table-bordered" >
                        <thead className="thead-light">
                            <tr className="db">
                                {/* <th>Id</th> */}
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Email</th>
                                <th>Adresse</th>
                                <th>Sexe</th>
                                <th>CIN</th>
                                <th>Téléphone</th>
                                
                                <th>Action</th>
                                                                
                            </tr>
                        </thead>
                        <tbody>
                            {prof}
                        </tbody>
                    </table>
                    {/* <ChartAbsence/>  */}
                    {/* <ChartSexe/> */}
                </div>
           
             </div>
             
        )
        }
    }
                                               