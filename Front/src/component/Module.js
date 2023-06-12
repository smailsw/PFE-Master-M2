import React, { Component } from 'react';
import Axios from 'axios';
import '../css/admin.css';
import history from '../history';

export default class Module extends Component {
  constructor(props) {
    super(props);
    this.OnchangeState = this.OnchangeState.bind(this);

    this.state = {
      val: '',
      modules: [],
      listFilter: [],
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/modules/')
      .then((res) => {
        for (let index = 0; index < res.data.data.length; index++) {
          console.log('id prof', res.data.data[index].id_Prof);
          console.log('id filiere', res.data.data[index].id_Filiere);
          if (res.data.data[index].id_Prof === 13) {
            res.data.data[index].id_Prof = 'Massin';
          }
          if (res.data.data[index].id_Prof === 14) {
            res.data.data[index].id_Prof = 'Yoba';
          }
          if (res.data.data[index].id_Prof === 16) {
            res.data.data[index].id_Prof = 'Ayyour';
          }
          if (res.data.data[index].id_Filiere === 1) {
            res.data.data[index].id_Filiere = 'GI';
          }

          if (res.data.data[index].id_Filiere === 2) {
            res.data.data[index].id_Filiere = 'GE';
          }
          if (res.data.data[index].id_Filiere === 4) {
            res.data.data[index].id_Filiere = 'ISIL';
          }
          console.log('id prof *******', res.data.data[index].id_Prof);
        }
        this.setState({
          modules: res.data.data,
          listFilter: res.data.data,
        });
        console.log('*********************************', res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addModule(url) {
    console.log('ici ------------');
    history.push(url);
    window.location.reload(false);
  }

  onClick(id_Module) {
    console.log('go----------------->');
    history.push('/EditModule/' + id_Module);
    window.location.reload(false);
  }

  deleteModule(id_Module) {
    console.log(id_Module);
    Axios.delete('http://localhost:5000/modules/delete/' + id_Module)
      .then((res) => console.log(res.data))
      .then();

    alert('Vous êtes sûr de supprimer ce module ?!');
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
          listFilter: this.state.modules.filter((elm) => elm.name.includes(this.state.val)),
        });
      }
    );
    console.log(this.state.val);
  }

  render() {
    const module =
      Array.isArray(this.state.listFilter) &&
      this.state.listFilter.map((module) => {
        return (
          <tr key={module._id_Module} className="even:bg-gray-50">
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">{module.name}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{module.nbrHeur}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{module.id_Prof}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{module.id_Filiere}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
              <button className="text-indigo-600 hover:text-indigo-900 mr-3" onClick={() => this.onClick(module.id_Module)}>
                <i className="fa fa-pencil-square-o" aria-hidden="true">
                  <img src="https://img.icons8.com/color/30/000000/edit-property.png" alt="" />
                </i>
              </button>
              <button className="text-indigo-600 hover:text-indigo-900" onClick={() => this.deleteModule(module.id_Module)}>
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
        <h2 className="text-lg font-semibold leading-6 text-gray-900 mb-3">La liste des modules</h2>
        <div className="row">
          <div className="flex col-sm-10 mb-2">
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
            <button
              className="btn"
              style={{ float: 'right', margin: '0px' }}
              onClick={() => this.addModule('/addModule')}
            >
              <i className="fa fa-trash-o">
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
                  Nom de module
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Nombre d'heures
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Professeur
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Filière
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>{module}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
