import React, { Component } from 'react';
import Axios from 'axios';
import '../css/style1.css';
import history from '../history';

export default class Etudiant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
      etudiants: [],
      listFilter: [],
      nomFiliere: [],
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/etudiants/')
      .then((res) => {
        this.setState({
          etudiants: res.data.data,
          listFilter: res.data.data,
        });

        for (let i = 0; i < res.data.data.length; i++) {
          const id = res.data.data[i].id_Filiere;
          console.log('id/*//*/***************>>>>>>>', id);
          Axios.get('http://localhost:5000/filieres/' + id).then((res) => {
            this.setState({
              nomFiliere: res.data.abreviation,
            });
            console.log('name----------------------->', res.data.abreviation);
            console.log('stata---------------------->', this.state.nomFiliere);
          });
        }
        console.log('stata---------------------->', this.state.nomFiliere);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addEtudiant(url) {
    console.log('Here ------------');
    history.push(url);
    window.location.reload(false);
  }

  addListeEtudiant(url) {
    history.push(url);
    window.location.reload(false);
  }

  onClick(Id_Etudiant) {
    console.log('go----------------->');
    history.push('/EditEtudiant/' + Id_Etudiant);
    window.location.reload(false);
  }

  deleteEtudiant(id_Etudiant) {
    console.log(id_Etudiant);
    Axios.delete('http://localhost:5000/etudiants/delete/' + id_Etudiant)
      .then((res) => console.log(res.data))
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });

    alert('Are you sure you want to delete this étudiant?');
    window.location.reload(false);
    console.log('Here *************************');
  }

  OnchangeState = (e) => {
    this.setState(
      {
        val: e.target.value,
      },
      () => {
        this.setState({
          listFilter: this.state.etudiants.filter((elm) => elm.last_name.includes(this.state.val)),
        });
      }
    );
    console.log(this.state.val);
  }

  render() {
    const etudiant = Array.isArray(this.state.listFilter) && this.state.listFilter.map((etudiant) => {
      return (
        <tr key={etudiant.id_Etudiant}>
          <td className="px-4 py-3">{etudiant.last_name}</td>
          <td className="px-4 py-3">{etudiant.first_name}</td>
          <td className="px-4 py-3">{etudiant.email}</td>
          <td className="px-4 py-3">{etudiant.adresse}</td>
          <td className="px-4 py-3">{etudiant.sexe}</td>
          <td className="px-4 py-3">{etudiant.cin}</td>
          <td className="px-4 py-3">{etudiant.date_naissance}</td>
          <td className="px-4 py-3">{etudiant.telephone}</td>
          <td className="px-4 py-3">{this.state.nomFiliere}</td>
          <td className="px-4 py-3">
            <button className="btn" onClick={() => this.onClick(etudiant.id_Etudiant)}>
              <i className="fa fa-pencil-square-o" aria-hidden="true">
                <img src="https://img.icons8.com/color/30/000000/edit-user-male--v1.png" alt="" />
              </i>
            </button>
            <button className="btn" onClick={() => this.deleteEtudiant(etudiant.id_Etudiant)}>
              <i className="fa fa-trash-o">
                <img src="https://img.icons8.com/plasticine/30/000000/filled-trash.png" alt="" />
              </i>
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="admin-container">
        <div className="border-gray-200 bg-white pr-4 py-0 sm:pr-6 pb-3">
          <h3 className="text-lg font-semibold leading-6 text-gray-900">La liste des étudiants</h3>
        </div>
        <div className="row">
          <div className="col-sm-10 mt-2 flex mb-2">
            <input
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="search"
              placeholder="Recherche par Nom"
              value={this.state.val}
              onChange={this.OnchangeState}
            />
            <div className="col-sm-1">
              <button className="btn add-admin-button" onClick={() => this.addEtudiant('/addEtudiant')}>
                <i className="fa fa-trash-o">
                  <img src="https://img.icons8.com/fluent/40/000000/add-user-male.png" alt="" />
                </i>
              </button>
            </div>
            <div className="col-sm-1">
              <button
                className="btn add-liste-admin-button"
                onClick={() => this.addListeEtudiant('/addListeEtudiant')}
              >
                <i className="fa fa-trash-o">
                  <img src="https://img.icons8.com/fluent/40/000000/add-file.png" alt="" />
                </i>
              </button>
            </div>
          </div>
        </div>
        <div className="db">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" className="py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                  Nom
                </th>
                <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                  Prénom
                </th>
                <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                  Email
                </th>
                <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                  Adresse
                </th>
                <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                  Sexe
                </th>
                <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                  CIN
                </th>
                <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                  Date de naissance
                </th>
                <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                  Téléphone
                </th>
                <th scope="col" className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
                  Filière
                </th>
                <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>{etudiant}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
