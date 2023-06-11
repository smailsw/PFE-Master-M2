import React, { Component } from 'react'

import Axios from 'axios';
import '../css/admin.css';

import Papa from 'papaparse';
import { MDBContainer } from 'mdbreact';
import history from '../history';


export default class addListeAdmin extends Component {
    
    constructor(props) {
        super(props);
      

        this.updateData = this.updateData.bind(this);
        this.state = {
          
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
                Axios.post('http://localhost:5000/admins/AddAdmin', {
                    first_name: data[index].first_name,
                    last_name: data[index].last_name,
                    email: data[index].email,
                    adresse: data[index].adresse,
      
                     })
                    .then(response => {
                        console.log(data[index])
                        console.log(response)
                    console.log('admin add with sucsess !!!!!!!!!!!!!!!!!!!********!!!!!!!!!!!!!!')
                    })
                    // addadmin(data[index]).then(res => {
                    // console.log("il est envoyer");
                                    
                    // })
            }
       
      }
annuler(){
    history.push('/admins')
    window.location.reload(false)
}
    
    
    render() {
        console.log("Render File data: ",this.state.csvfile);

 
        return (
        <MDBContainer>
        
                <div className="db">
                    <div>
                    <h3 className="hh1">Importer une liste des admins </h3>
                    
                        <div className="col-md-6">
                        <input
                            className="csv-input"
                            type="file"
                            ref={input => {
                                this.filesInput = input;
                            }}
                            name="file"
                            placeholder={null}
                            onChange={this.handleChange}
                        />
                         <p />
                    </div>
                    <div className="col-md-6">
                        <button onClick={this.importCSV} className="btn btn-success"> Importer!</button>
                        <button type="button" class="btn btn-danger" onClick={this.annuler} >Annuler</button>
                    </div>
                   
                    </div>
                 
                </div>

            
             </MDBContainer>
             
        )
        }
    }
                                               