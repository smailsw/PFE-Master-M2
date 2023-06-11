import React, { Component } from 'react'

import Axios from 'axios';


import history from '../history';


export default class User extends Component {
    
    constructor(props) {
        super(props);
        //this.addUser=this.addUser.bind(this);
        this.OnchangeState=this.OnchangeState.bind(this);

        this.state = {
            val:'',
            users: [],
            listFilter: []
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/users/')
            .then(res => {
                this.setState({ users: res.data.data,
                    listFilter:res.data.data})
               console.log('users',res.data.data)   
            }) 
            .catch((error) => {
                console.log(error);
            })

           

    }
    
    addUser(url){
    console.log('ici ------------')
    history.push(url) ;
    window.location.reload(false);
}
    addListeUser(url){
        console.log('ici ------------')
        history.push(url) ;
        window.location.reload(false);
    }
onClick(Id){
    console.log('go----------------->')
    history.push('/EditUser/'+Id)
    window.location.reload(false);

    
}

deleteUser(id) {
    console.log(id)
    Axios.delete('http://localhost:5000/users/dellete/' + id)
        .then(res => console.log(res.data))
        .then(
                       
        )
        alert("Vous êtes sur de supprimer ce utilisateur ?!")
            window.location.reload(false);
            console.log("ici*************************")
    
}

    OnchangeState(e){
        this.setState({
            
            val:e.target.value,
    
        },()=>{
            this.setState({
                listFilter:this.state.users.filter(elm=>(elm.last_name.includes(this.state.val)))
                })
            }
        )
        console.log(this.state.val)
    }
    render() {

        const user = Array.isArray(this.state.listFilter) && this.state.listFilter.map(user => {

                return(
            <tr key={user.id}>
                
                <td>{user.last_name}</td>
                <td>{user.first_name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                
                     <button className="btn" onClick={()=>this.onClick(user.id)}>
                         <i className="fa fa-pencil-square-o" aria-hidden="true"><img src="https://img.icons8.com/color/30/000000/edit-user-male--v1.png" alt=""/></i>
                     </button>
                
                    <button className="btn" 
                     onClick={() => { this.deleteUser(user.id) }}>
                         <i className="fa fa-trash-o" ><img src="https://img.icons8.com/plasticine/30/000000/filled-trash.png" alt=""/></i>
                    </button>
                    
                </td>
                
            </tr>
)
  })
        return (
          <div className="db">
              <h2 className="roboto">La liste des utilisateurs</h2>
               <hr/>
                    <div className="row">
                        <div className="col-sm-10">
                            <nav className="navbar navbar-light bg-light">                
                                 <input className="form-control mr-sm-2 "  type="search" placeholder="Recherche par Nom" 
                                    value={this.state.val} onChange={(e)=>{this.OnchangeState(e)}} />
                            </nav>
                    </div>
                      <div className="col-sm-1">
                      <button  className="btn"
                         style={{float: "right", margin: "0px"}}
                             >
                   <i className="fa fa-trash-o" 
                   
                    onClick={() => this.addUser('/addUser')}> 
                   <img src="https://img.icons8.com/fluent/40/000000/add-user-male.png" alt=""/></i>
                   
                      </button>
                   </div>
                   <div className="col-sm-1">
                      <button  class="btn"
                         style={{float: "right", margin: "0px"}}
                             >
                   <i className="fa fa-trash-o" 
                    
                    className="db"
                    onClick={() => this.addListeUser('/addListeUser')}> 
                  <img src="https://img.icons8.com/fluent/40/000000/add-file.png" alt=""/></i>
               </button>
                </div>
                </div>
                <hr/>
              
                <div>
                    
                    <table className="table table-bordered" >
                        <thead className="thead-light">
                            <tr>
                                
                                <th>Nom</th>
                                <th>Péenom</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                                                                
                            </tr>
                        </thead>
                        <tbody>
                            {user}
                        </tbody>
                    </table>
                </div>
           
             </div>
             
        )
        }
    }
                        