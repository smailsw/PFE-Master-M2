import React, { Component } from 'react'

import Axios from 'axios';
import '../css/admin.css';


import history from '../history';
import ChartEtudiant from '../charts/ChartEtudiant';
import Papa from 'papaparse';
import ChartAbsFiliere from '../charts/ChartAbsFiliere';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { addadmin } from '../service/serviceAddadmin';
import ChartFiliereAbs from '../charts/ChartFiliereAbs';



export default class Admin extends Component {
    
    constructor(props) {
        super(props);
        this.OnchangeState=this.OnchangeState.bind(this);

        this.updateData = this.updateData.bind(this);
        this.state = {
            val:'',
            admins: [],
            listFilter: [],
            csvfile: undefined
            
        };
    }

    handleChange = event => {
        this.setState({
          csvfile: event.target.files[0]
        });
      };
    
      importCSV = () => {
        const { csvfile } = this.state;
        Papa.parse(csvfile, {
          complete: this.updateData,
          header: true
        });
      };
    
      updateData(result) {
          console.log("tou are here updateData() !!!!!!!!!!!!!!!!!!!!!!", result);
          
        var data = result.data;

        console.log('data[0]--------->',data[0]);
        console.log('data[1]--------->',data[1]);
        console.log('data.length--------->',data.length);
            for (let index = 0; index < data.length-1; index++) {
                    addadmin(data[index]).then(res => {
                    console.log("il est envoyer");
                                    
                    })
            }
       
      }

    componentDidMount() {
        Axios.get('http://localhost:5000/admins/')
            .then(res => {
                this.setState({ admins: res.data.data,
                    listFilter:res.data.data})
               console.log(res.data.data)   
            }) 
            .catch((error) => {
                console.log(error);
            })

           

    }
    
    addAdmin(url){
    console.log('ici ------------')
    history.push(url) ;
    window.location.reload(false);
}
    addListeAdmin(url){
        console.log('ici ------------')
        history.push(url) ;
        window.location.reload(false);
    }
    onClick(Id){
        console.log('go----------------->')
        history.push('/EditAdmin/'+Id)
        window.location.reload(false);

        
    }

deleteAdmin(id) {
    console.log(id)
    Axios.delete('http://localhost:5000/admins/delete/' + id)
        .then(res => console.log(res.data))
        .then(
                       
        )
        alert("Vous êtes sur de supprimer ce Admin ?!")
            window.location.reload(false);
            console.log("ici*************************")
    
}


    OnchangeState(e){
       
        this.setState({
            
            val:e.target.value,
    
        },()=>{
            this.setState({
                listFilter:this.state.admins.filter(elm=>(elm.last_name.includes(this.state.val)))
                })
            }
        )
        console.log(this.state.val)
    }
    
    render() {
        console.log("Render File data: ",this.state.csvfile);

        const admin = Array.isArray(this.state.listFilter) && this.state.listFilter.map(admin => {

                return(
            <tr key={admin._id}>
                <td className="db">{admin.last_name}</td>
                <td className="db">{admin.first_name}</td>
                <td className="db">{admin.email}</td>
                <td className="db">{admin.adresse}</td>
                

                <td>
                
                     <button className="btn" onClick={()=>this.onClick(admin.id)}>
                         <i className="fa fa-pencil-square-o" aria-hidden="true"><img src="https://img.icons8.com/color/30/000000/edit-user-male--v1.png" alt=""/></i>
                     </button>
                
                    <button className="btn" 
                     onClick={() => { this.deleteAdmin(admin.id) }}>
                         <i className="fa fa-trash-o" ><img src="https://img.icons8.com/plasticine/30/000000/filled-trash.png" alt=""/></i>
                    </button>
                </td>   
            </tr>
)
  })
        return (
        <MDBContainer>
            <h3 className="roboto">La liste des administrateurs</h3>
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
                    
                    className="db"
                    onClick={() => this.addAdmin('/addAdmin')}> 
                  <img src="https://img.icons8.com/fluent/40/000000/add-user-male.png" alt=""/></i>

               </button>
               </div>
               <div className="col-sm-1">
                      <button  class="btn"
                         style={{float: "right", margin: "0px"}}
                             >
                   <i className="fa fa-trash-o" 
                    
                    className="db"
                    onClick={() => this.addListeAdmin('/addListeAdmin')}> 
                  <img src="https://img.icons8.com/fluent/40/000000/add-file.png" alt=""/></i>
               </button>
                </div>
                </div>
                <hr/>
 
                <div className="db">
                    
                    
                    <table className="table table-bordered" >
                        <thead className="thead-light">
                            <tr className="db">
                                
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Email</th>
                                <th>Adresse</th>
                                
                                
                                <th>Action</th>
                                                                
                            </tr>
                        </thead>
                        <tbody>
                            {admin}
                        </tbody>
                    </table>
                </div>

             
                
            
             </MDBContainer>
             
        )
        }
    }
                                               