import React, { Component } from 'react'

import Axios from 'axios';


import history from '../history';

const initState={
    val:'',
    etudiants: [],
    listFilter: [],
    seances: [],
    listFilterSeance: [],
    nom_module: '',
    id: '',
    absent: '',
    absenceId: '',
    selectModule:'',
    selectFiliere:'',
    nameM: '',
    nameF: '',

    idM: 1,
    idF: 1
}
export default class addAbsence extends Component {
    
    constructor(props) {
        super(props);
        this.OnchangeState=this.OnchangeState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        

        this.state =initState;
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/seances/' + this.props.match.params.id)
        .then(res => {
            console.log("seance",res.data.id_Module)
            if (res.data.id_Module===1) {
                
                this.setState({
                    nameM: "Java",
                    nameF: "GED",
                    idM: 1,
                    idF: 1
                })
                
            }
            
                      if (res.data.id_Module===2) {
                   
                    this.setState({
                        nameM: "WEB",
                        nameF: "GI"
                    })
                    
                }
                if (res.data.id_Module===3) {
               
                    this.setState({
                        nameM: "Reseaux",
                        nameF: "TM"
                    })
                    
                }
                if (res.data.id_Module===4) {
                    
                    this.setState({
                        nameM: "UML",
                        nameF: "ISIL"
                    })
                    
                }

            // for (let index = 0; index < res.data.data.length; index++) {
            //     console.log('id prof', res.data.data[index].id_Prof)
            //     console.log('id filiere', res.data.data[index].id_Filiere)
            //     // if (res.data.data[index].id_Filiere===13) {
            //     //     res.data.data[index].id_Filiere= "Massin"
            //     // }
            //     // if (res.data.data[index].id_Filiere===14) {
            //     //     res.data.data[index].id_Filiere= "Yoba"
            //     // }
            //     // if (res.data.data[index].id_Filiere===16) {
            //     //     res.data.data[index].id_Filiere= "Ayyour"
            //     // }
            //     if (res.data.data[index].id_Module===1) {
            //         // res.data.data[index].id_Filiere= "GI"
            //         this.setState({
            //             nameM: "WEB"
            //         })
                    
            //     }

            //     if (res.data.data[index].id_Module===2) {
            //         // res.data.data[index].id_Filiere= "GE"
            //         this.setState({
            //             nameM: "Java"
            //         })

                    
            //     }
            //     if (res.data.data[index].id_Filiere===4) {
            //         res.data.data[index].id_Filiere= "ISIL"
                    
            //     }
                
                
            // }
            // res.data.id_Module="Web"
            // res.data.id_Filiere= "GI"
            this.setState({
                
                seances: res.data.data,
                listFilterSeance:res.data.data              
            })
            // console.log('filiere',this.state.selectFiliere)
        })
        .catch((error) => {
            console.log(error);
        })
        Axios.get('http://localhost:5000/etudiants/')
            .then(res => {
                this.setState({ etudiants: res.data.data,
                    listFilter:res.data.data})
               console.log("id",res.data)
            }) 
            .catch((error) => {
                console.log(error);
            })
       
 }

 onSubmit(e) {
    e.preventDefault();
    console.log('********!!!!!!!!!!**************!!!!!!!!!!!!*');
      alert('vous avez prenez l\'absence des étudiants') 
    //   this.setState(initState);
      history.push('/absences');
      window.location.reload(false);
   
            
}

handleChange({target}){
    if (target.checked){
       target.removeAttribute('checked');
       
       console.log('name',target.name)
       console.log('value',target.value)
       const abs={
           
           id_Etudiant: target.name,
           id_Module: this.state.idM,
           id_Seance: this.props.match.params.id,
           id_Filiere: this.state.idF
       }
       console.log('filiere', this.state.nameF)
       Axios.post('http://localhost:5000/absences/AddAbsence',abs)
    .then(response => {
        
        console.log(response)
      console.log('absence add with sucsess !!!!!!!!!!!!!!!!!!!********!!!!!!!!!!!!!!')
    })
    .catch((error) => {
        console.log(error);
    })
    
       target.parentNode.style.textDecoration = "";
    } else {
       target.setAttribute('checked', true);
       target.parentNode.style.textDecoration = "line-through";
    }
}

    OnchangeState(e){
        this.setState({
            val:e.target.value,
    
        },()=>{
            this.setState({
                listFilter:this.state.etudiants.filter(elm=>(elm.nom.includes(this.state.val))),
               
                })
            }
        )
        console.log(this.state.val)
    }


    annuler(){
        history.push('/seances');
        window.location.reload(false)
    }
    render() {

        const etudiant = Array.isArray(this.state.listFilter) && this.state.listFilter.map(etudiant => {
           
                return(
            <tr key={etudiant._id_Etudiant}>
                <td>{etudiant.last_name}</td>
                <td>{etudiant.first_name}</td>
                <td>{etudiant.cne}</td>
                <td>{etudiant.cin}</td>
                <td>{this.state.nameM}</td>
                 <td>{this.state.nameF}</td>
                <td>
                <input type="checkbox"
                        name={etudiant.id_Etudiant}
                        value={this.state.id_Module}
                        onClick={this.handleChange}
                        defaultChecked={this.props.complete}
                  />
                </td>
   
            </tr>
)
  })


        return (
          <div className="db">
              
                
                    <h3>Tous les etudiants</h3>
                    <table className="table table-bordered" >
                        <thead className="thead-light">
                            <tr>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>CNE</th>
                                <th>CIN</th>
                                <th>Module</th>
                                <th>Filière</th>
                                <th>Affecter un absence</th>
                                                                
                            </tr>
                        </thead>
                        <tbody>
                            {etudiant}
                        </tbody>
                   </table>
                   <button type="button" class="btn btn-primary" style={{float:"right"}} onClick={this.onSubmit} >Valider</button>
                   <button type="button" style={{float: "right"}} class="btn btn-danger" onClick={this.annuler} >Annuler</button>  
              
           
            
            
            </div>
             
        )
        }
    }
                                               