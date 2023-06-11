import React, { Component } from 'react'

import Axios from 'axios';


export default class Absence extends Component {
    
    constructor(props) {
        super(props);
        // this.OnchangeState=this.OnchangeState.bind(this);

        this.state = {
            val:'',
            idTest: [],
            absences:[],
            listFilter: [],
            listFilterAbs: [],
            etudiants: []
        };
    }

    componentDidMount() {

         Axios.get('http://localhost:5000/absences/')
            .then(res => {
                   
                       
                   
                    for (let index = 0; index < res.data.data.length; index++) {
                        console.log('id etudiant', res.data.data[index].id_Etudiant)
                        console.log('id module', res.data.data[index].id_Module)
                       

                        if (res.data.data[index].id_Etudiant===1) {
                            res.data.data[index].id_Etudiant= "Tinane Afraw"
                        }
                        if (res.data.data[index].id_Etudiant===2) {
                            res.data.data[index].id_Etudiant= "Nomidia Dayfas"
                        }
                        if (res.data.data[index].id_Etudiant===3) {
                            res.data.data[index].id_Etudiant= "Irwan Assafo"
                        }
                        if (res.data.data[index].id_Etudiant===4) {
                            res.data.data[index].id_Etudiant= "Tinhila Minhilan"
                            
                        }
    
                        if (res.data.data[index].id_Etudiant===5) {
                            res.data.data[index].id_Etudiant= "Nihya Rabil"
                            
                        }
                        if (res.data.data[index].id_Etudiant===6) {
                            res.data.data[index].id_Etudiant= "Tisslit Talmot"
                            
                        }
                        if (res.data.data[index].id_Etudiant===7) {
                            res.data.data[index].id_Etudiant= "Azrdab Moran"
                            
                        }

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
                     
                    } this.setState({ absences: res.data.data,
                        listFilterAbs:res.data.data,
                        })
                 
            }) 
            .catch((error) => {
                console.log(error);
            })
          

    }
    
    OnchangeState(e){
        this.setState({
            
            val:e.target.value,
    
        },()=>{
            this.setState({
                listFilterAbs:this.state.absences.filter(elm=>(elm.nom.includes(this.state.val)))
                })
            }
        )
        console.log('dd',this.state.listFilter)
    }
    render() {


  //------------------------------------->
  const absent = Array.isArray(this.state.listFilterAbs) && this.state.listFilterAbs.map(absent => {

    return(
            <tr key={absent._id_Absence}>
                
                <td>{absent.id_Etudiant}</td>
                <td>{absent.id_Module}</td>
                <td>{absent.created}</td>

            </tr>
)
})
        return (
          <div>
                              

                <div>
                    <h3>Liste des absences </h3>
                    <table className="table table-bordered" >
                        <thead className="thead-light">
                            <tr>
                                <th>Nom et Prénom</th>
                                <th>Module</th>
                                <th>Date d'absence</th>
                                                      
                            </tr>
                        </thead>
                        <tbody>
                            {absent}
                        </tbody>
                    </table>
                </div>
           
             </div>
             
        )
        }
    }
                                               