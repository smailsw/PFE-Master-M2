import React, { Component } from 'react';
import Axios from 'axios';
import '../css/admin.css';
import history from '../history';

export default class Annances extends Component {
  constructor(props) {
    super(props);
    this.OnchangeState = this.OnchangeState.bind(this);

    this.state = {
      val: '',
      annances: [],
      listFilter: [],
      NomFiliere: '',
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/annances/')
      .then((res) => {
        this.setState({
          annances: res.data.data,
          listFilter: res.data.data,
        });
        console.log('annances----->', res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    Axios.get('http://localhost:5000/filieres/' + 2)
      .then((res) => {
        this.setState({
          NomFiliere: res.data.abreviation,
        });
        console.log('filieres------>', res.data);
        console.log('this.state.NomFiliere------->', this.state.NomFiliere);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addAnnance(url) {
    console.log('ici ------------');
    history.push(url);
    window.location.reload(false);
  }

  deleteAnnance(id_Annance) {
    console.log(id_Annance);
    Axios.delete('http://localhost:5000/annances/delete/' + id_Annance)
      .then((res) => console.log(res.data))
      .then();

    alert('Vous êtes sûr de supprimer cette annonce ?!');
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
          listFilter: this.state.annances.filter((elm) => elm.sujet.includes(this.state.val)),
        });
      }
    );
    console.log(this.state.val);
  }

  render() {
    const annance =
      Array.isArray(this.state.listFilter) &&
      this.state.listFilter.map((annance) => {
        return (
          <tr key={annance._id_Annance} className="even:bg-gray-50">
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
              {annance.sujet}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{annance.desc}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{this.state.NomFiliere}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
              <button className="text-indigo-600 hover:text-indigo-900 mr-3" onClick={() => this.deleteAnnance(annance.id_Annance)}>
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
        <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-3">Liste des annonces</h3>
        <div className="row">
          <div className="flex col-sm-10">
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
            <button className="btn" style={{ float: 'right', margin: '0px' }} onClick={() => this.addAnnance('/AddAnnance')}>
              <i className="fa fa-trash-o">
                <img src="https://img.icons8.com/dusk/40/000000/add-reminder.png" alt="" />
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
                  Sujet
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Description
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Filière
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>{annance}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
