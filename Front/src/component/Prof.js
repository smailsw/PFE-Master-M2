import React, { Component } from 'react';
import Axios from 'axios';
import '../css/admin.css';
import history from '../history';

export default class Prof extends Component {
  constructor(props) {
    super(props);
    this.OnchangeState = this.OnchangeState.bind(this);

    this.state = {
      val: '',
      profs: [],
      listFilter: [],
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/profs/')
      .then((res) => {
        this.setState({
          profs: res.data.data,
          listFilter: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addProf(url) {
    console.log('ici ------------');
    history.push(url);
    window.location.reload(false);
  }

  addListeProf(url) {
    history.push(url);
    window.location.reload(false);
  }

  onClick(id_Prof) {
    console.log('go----------------->');
    history.push('/EditProf/' + id_Prof);
    window.location.reload(false);
  }

  deleteProf(id_Prof) {
    console.log(id_Prof);
    Axios.delete('http://localhost:5000/profs/delete/' + id_Prof)
      .then((res) => console.log(res.data))
      .then();

    alert('Vous êtes sûr de supprimer cette professeur ?!');
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
          listFilter: this.state.profs.filter((elm) => elm.last_name.includes(this.state.val)),
        });
      }
    );
    console.log(this.state.val);
  }

  render() {
    const prof = Array.isArray(this.state.listFilter)
      ? this.state.listFilter.map((prof) => (
          <tr key={prof._id_Prof} className="even:bg-gray-50">
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
              {prof.last_name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{prof.first_name}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{prof.email}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{prof.adresse}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{prof.sexe}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{prof.cin}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{prof.telephone}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
              <button className="text-indigo-600 hover:text-indigo-900 mr-3" onClick={() => this.onClick(prof.id_Prof)}>
                Edit<span className="sr-only">, {prof.last_name}</span>
              </button>
              <button className="text-indigo-600 hover:text-indigo-900" onClick={() => this.deleteProf(prof.id_Prof)}>
                Delete<span className="sr-only">, {prof.last_name}</span>
              </button>
            </td>
          </tr>
        ))
      : null;

    return (
      <div className="admin-container">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">La liste des professeurs</h3>
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
                        <div className="col-sm-1 mr-2 ml-2">
            <button class="btn" style={{ float: 'right', margin: '0px' }}>
              <i className="fa fa-trash-o" onClick={() => this.addProf('/addProf')}>
                <img src="https://img.icons8.com/fluent/40/000000/add-user-male.png" alt="" />
              </i>
            </button>
          </div>
          <div className="col-sm-1">
            <button class="btn" style={{ float: 'right', margin: '0px' }}>
              <i className="fa fa-trash-o" className="db" onClick={() => this.addListeProf('/addListeProf')}>
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
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                  Nom
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Prénom
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Email
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Adresse
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Sexe
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  CIN
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Téléphone
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>{prof}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
