import React, { Component } from 'react';
import Axios from 'axios';
import '../css/admin.css';
import ChartAbsenceModule from '../charts/ChartAbsenceModule';
import history from '../history';

export default class Seance extends Component {
  constructor(props) {
    super(props);
    this.OnchangeState = this.OnchangeState.bind(this);

    this.state = {
      val: '',
      seances: [],
      seances1: [],
      listFilter: [],
      listFilter1: [],
      db: [],
    };
  }

  componentDidMount() {
    console.log('localStorage.getItem()', localStorage.getItem('user'));
    const idProf = localStorage.getItem('user');
    Axios.get('http://localhost:5000/seances')
      .then((res) => {
        for (let index = 0; index < res.data.data.length; index++) {
          console.log('id prof', res.data.data[index].id_Prof);
          console.log('id filiere', res.data.data[index].id_Filiere);
          if (res.data.data[index].id_Module === 1) {
            res.data.data[index].id_Module = 'Java';
          }
          if (res.data.data[index].id_Module === 2) {
            res.data.data[index].id_Module = 'Web';
          }
          if (res.data.data[index].id_Module === 3) {
            res.data.data[index].id_Module = 'Reseaux';
          }
          if (res.data.data[index].id_Module === 4) {
            res.data.data[index].id_Module = 'UML';
          }
          if (res.data.data[index].id_Module === 5) {
            res.data.data[index].id_Module = 'TEC';
          }

          console.log('id prof *******', res.data.data[index].id_Prof);
        }
        this.setState({
          seances: res.data.data,
          listFilter: res.data.data,
        });
        console.log('seances -------------------->', res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addSeance(url) {
    console.log('ici ------------');
    history.push(url);
    window.location.reload(false);
  }

  onClick(id_Seance) {
    console.log('go----------------->');
    history.push('/EditSeance/' + id_Seance);
    window.location.reload(false);
  }

  addAbsence(id_Seance) {
    console.log('go----------------->');
    history.push('/addAbsence/' + id_Seance);
    window.location.reload(false);
  }

  deleteSeance(id_Seance) {
    console.log(id_Seance);
    Axios.delete('http://localhost:5000/seances/delete/' + id_Seance)
      .then((res) => console.log(res.data))
      .then();

    alert('Vous êtes sûr de supprimer cette séance ?!');
    window.location.reload(false);
    console.log('ici*************************');
  }

  OnchangeState(e) {
    this.setState(
      {
        val: e.target.value,
      },
      () => {
        this.setState({
          listFilter: this.state.seances.filter((elm) => elm.nom.includes(this.state.val)),
        });
      }
    );
    console.log(this.state.val);
  }

  render() {
    const seance = Array.isArray(this.state.listFilter)
      ? this.state.listFilter.map((seance) => (
          <tr key={seance._id_Seance} className="even:bg-gray-50">
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">{seance.date_Seance}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{seance.heurDebut}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{seance.heurFin}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{seance.type_Seance}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{seance.id_Module}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
              <button className="text-indigo-600 hover:text-indigo-900 mr-3" onClick={() => this.onClick(seance.id_Seance)}>
                Edit<span className="sr-only">, {seance.nom}</span>
              </button>
              <button className="text-indigo-600 hover:text-indigo-900 mr-3" onClick={() => this.deleteSeance(seance.id_Seance)}>
                Delete<span className="sr-only">, {seance.nom}</span>
              </button>
              <button className="text-indigo-600 hover:text-indigo-900" onClick={() => this.addAbsence(seance.id_Seance)}>
                Add Absence<span className="sr-only">, {seance.nom}</span>
              </button>
            </td>
          </tr>
        ))
      : null;

    return (
      <div className="admin-container">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">La liste des séances</h3>
        <div className="row">
          <div className="flex col-sm-10 mt-2 mb-2">
            <input
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="search"
              placeholder="Recherche"
              value={this.state.val}
              onChange={(e) => {
                this.OnchangeState(e);
              }}
            />
                      <div className="col-sm-2 ml-4">
            <button class="btn" style={{ float: 'right', margin: '0px' }}>
              <i className="fa fa-trash-o" onClick={() => this.addSeance('/addSeance')}>
                <img src="https://img.icons8.com/nolan/40/add.png" alt="" />
              </i>
            </button>
          </div>
          </div>

        </div>

        <div className="db">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                  Date de seance
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Heur debut
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Heur fin
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Type de Séance
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Module
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>{seance}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
