import React, { Component } from 'react';
import Axios from 'axios';
import '../css/admin.css';
import Papa from 'papaparse';
import { MDBContainer } from 'mdbreact';
import history from '../history';

export default class addListeProf extends Component {
  constructor(props) {
    super(props);

    this.updateData = this.updateData.bind(this);
    this.state = {
      csvfile: undefined,
    };
  }

  handleChange = (event) => {
    this.setState({
      csvfile: event.target.files[0],
    });
  };

  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true,
    });
  };

  updateData(result) {
    console.log('tou are here updateData() !!!!!!!!!!!!!!!!!!!!!!', result);

    var data = result.data;

    console.log('data[0]--------->', data[0]);
    console.log('data[1]--------->', data[1]);
    console.log('data.length--------->', data.length);
    for (let index = 0; index < data.length - 1; index++) {
      Axios.post('http://localhost:5000/profs/AddProf', {
        first_name: data[index].nom,
        last_name: data[index].prenom,
        email: data[index].email,
        adresse: data[index].adresse,
        sexe: data[index].sexe,
        cin: data[index].cin,
        telephone: data[index].telephone,
      })
        .then((response) => {
          console.log(data[index]);
          console.log('prof add with success !!!!!!!!!!!!!!!!!!!********!!!!!!!!!!!!!!');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  annuler() {
    history.push('/professeurs');
    window.location.reload(false);
  }

  render() {
    console.log('Render File data: ', this.state.csvfile);

    return (
        <div className="admin-container">
            <h3 className="hh1">Importer une liste des Professeurs</h3>

            <div className="mt-10">
              <div className="col-md-6">
                <input
                  className="csv-input"
                  type="file"
                  ref={(input) => {
                    this.filesInput = input;
                  }}
                  name="file"
                  placeholder={null}
                  onChange={this.handleChange}
                />
                <p />
              </div>
              <div className="flex mt-6">
                <button
                  onClick={this.importCSV}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded mr-2"
                >
                  Importer!
                </button>
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded"
                  onClick={this.annuler}
                >
                  Annuler
                </button>
              </div>
            </div>
        </div>
    );
  }
}
