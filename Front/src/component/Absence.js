import React, { Component } from 'react';
import Axios from 'axios';
import '../css/admin.css';

export default class Absence extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: '',
      idTest: [],
      absences: [],
      listFilter: [],
      listFilterAbs: [],
      etudiants: [],
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/absences/')
      .then((res) => {
        res.data.data.forEach((absent) => {
          if (absent.id_Etudiant === 1) {
            absent.id_Etudiant = 'Tinane Afraw';
          }
          if (absent.id_Etudiant === 2) {
            absent.id_Etudiant = 'Nomidia Dayfas';
          }
          if (absent.id_Etudiant === 3) {
            absent.id_Etudiant = 'Irwan Assafo';
          }
          if (absent.id_Etudiant === 4) {
            absent.id_Etudiant = 'Tinhila Minhilan';
          }
          if (absent.id_Etudiant === 5) {
            absent.id_Etudiant = 'Nihya Rabil';
          }
          if (absent.id_Etudiant === 6) {
            absent.id_Etudiant = 'Tisslit Talmot';
          }
          if (absent.id_Etudiant === 7) {
            absent.id_Etudiant = 'Azrdab Moran';
          }

          if (absent.id_Module === 1) {
            absent.id_Module = 'Java';
          }
          if (absent.id_Module === 2) {
            absent.id_Module = 'Web';
          }
          if (absent.id_Module === 3) {
            absent.id_Module = 'Reseaux';
          }
          if (absent.id_Module === 4) {
            absent.id_Module = 'UML';
          }
          if (absent.id_Module === 5) {
            absent.id_Module = 'TEC';
          }
        });
        this.setState({
          absences: res.data.data,
          listFilterAbs: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  OnchangeState(e) {
    this.setState(
      {
        val: e.target.value,
      },
      () => {
        this.setState({
          listFilterAbs: this.state.absences.filter((elm) => elm.nom.includes(this.state.val)),
        });
      }
    );
    console.log('dd', this.state.listFilter);
  }

  render() {
    const absent =
      Array.isArray(this.state.listFilterAbs) &&
      this.state.listFilterAbs.map((absent) => {
        return (
          <tr key={absent._id_Absence} className="even:bg-gray-50">
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
              {absent.id_Etudiant}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{absent.id_Module}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{absent.created}</td>
          </tr>
        );
      });

    return (
      <div className="admin-container">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">Liste des absences</h3>
        <div className="row">
          <div className="col-sm-10 mt-2 flex mb-2">
            <input
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="search"
              placeholder="Recherche par Nom"
              value={this.state.val}
              onChange={(e) => {
                this.OnchangeState(e);
              }}
            />
          </div>
        </div>

        <div className="db">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                  Nom et Prénom
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Module
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Date d'absence
                </th>
              </tr>
            </thead>
            <tbody>{absent}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
