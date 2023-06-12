import React, { Component } from 'react';
import Axios from 'axios';
import '../css/admin.css';
import history from '../history';

export default class Filiere extends Component {
  constructor(props) {
    super(props);
    this.OnchangeState = this.OnchangeState.bind(this);

    this.state = {
      val: '',
      filieres: [],
      listFilter: [],
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/filieres/')
      .then((res) => {
        this.setState({
          filieres: res.data.data,
          listFilter: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addFiliere(url) {
    console.log('ici ------------');
    history.push(url);
    window.location.reload(false);
  }

  onClick(id_Filiere) {
    console.log('go----------------->');
    history.push('/EditFiliere/' + id_Filiere);
    window.location.reload(false);
  }

  deleteFiliere(id_Filiere) {
    console.log(id_Filiere);
    Axios.delete('http://localhost:5000/filieres/delete/' + id_Filiere)
      .then((res) => console.log(res.data))
      .then();

    alert('Vous êtes sûr de supprimer cette filière ?!');
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
          listFilter: this.state.filieres.filter((elm) => elm.name.includes(this.state.val)),
        });
      }
    );
    console.log(this.state.val);
  }

  render() {
    const filiere = Array.isArray(this.state.listFilter)
      ? this.state.listFilter.map((filiere) => (
          <tr key={filiere.id_Filiere} className="even:bg-gray-50">
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">{filiere.name}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{filiere.abreviation}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 sm:pr-3">
              <button className="text-indigo-600 hover:text-indigo-900 mr-3" onClick={() => this.onClick(filiere.id_Filiere)}>
                Edit<span className="sr-only">, {filiere.name}</span>
              </button>
              <button className="text-indigo-600 hover:text-indigo-900" onClick={() => this.deleteFiliere(filiere.id_Filiere)}>
                Delete<span className="sr-only">, {filiere.name}</span>
              </button>
            </td>
          </tr>
        ))
      : null;

    return (
      <div className="admin-container">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">La liste des filières</h3>
        <div className="row">
          <div className="col-sm-10 mt-2 flex mb-2">
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
              <i className="fa fa-trash-o" onClick={() => this.addFiliere('/addFiliere')}>
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
                  Nom de Filière
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Abreviation
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>{filiere}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
