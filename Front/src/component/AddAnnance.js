import React, { Component } from 'react';
import Axios from 'axios';
import history from '../history';
import { addannance } from '../service/serviceAddannance';

const initialState = {
  sujet: '',
  desc: '',
  selectFiliere: '',
  listefilieres: [],
  sujetEror: '',
  descEror: '',
  selectFiliereEror: '',
  addS: null
};

export default class AddAnnance extends Component {
  constructor(props) {
    super(props);
    this.onChangeSujet = this.onChangeSujet.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeSelectFiliere = this.onChangeSelectFiliere.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = initialState;
  }

  onChangeSujet(e) {
    this.setState({
      sujet: e.target.value
    });
  }

  onChangeDesc(e) {
    this.setState({
      desc: e.target.value
    });
  }

  onChangeSelectFiliere(e) {
    this.setState({
      selectFiliere: e.target.value
    });
  }

  validate = () => {
    let sujetEror = '';
    let descEror = '';
    let selectFiliereEror = '';

    if (!this.state.sujet) {
      sujetEror = "Le champ Sujet de l'annonce est obligatoire";
    }
    if (!this.state.desc) {
      descEror = "Le champ Description de l'annonce est obligatoire";
    }
    if (!this.state.selectFiliere) {
      selectFiliereEror = 'Le champ filiere est obligatoire';
    }

    if (sujetEror || descEror || selectFiliereEror) {
      this.setState({ sujetEror, descEror, selectFiliereEror });
      return false;
    }

    return true;
  };

  componentDidMount() {
    Axios.get('http://localhost:5000/filieres/')
      .then((res) => {
        this.setState({ listefilieres: res.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();
    const annance = {
      sujet: this.state.sujet,
      desc: this.state.desc,
      selectFiliere: this.state.selectFiliere
    };

    const isValid = this.validate();
    if (isValid) {
      addannance(annance)
        .then((res) => {
          console.log('L\'annonce a été ajoutée.');
          this.setState(initialState);
          this.setState({
            addS: 'Annonce Ajoutée'
          });
        })
        .catch((error) => {
          console.log("Erreur lors de l'envoi", error);
        });
    } else {
      console.log('Il y a un problème lors de la validation des informations.');
    }
  }

  annuler(e) {
    history.push('/annances');
    window.location.reload(false);
  }

  render() {
    return (
      <div className="db">
        <form onSubmit={this.onSubmit} className="text border border-light p-5">
          <div className={this.state.addS == null ? 'hidden' : ''}>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>{this.state.addS}</strong>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.annuler}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <h3 className="text-lg font-semibold leading-6 text-gray-900">Ajouter une annonce</h3>
          <hr className="my-4" />
          <div className="form-group">
            <div className="col-md-6">
              <label htmlFor="sujet" className="block text-sm font-medium text-gray-700">
                Sujet:
              </label>
              <input
                type="text"
                required
                placeholder="Sujet"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.sujet}
                onChange={this.onChangeSujet}
              />
              <div style={{ color: 'red' }}>{this.state.sujetEror}</div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-6">
              <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
                Description:
              </label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Description"
                value={this.state.desc}
                onChange={this.onChangeDesc}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              ></textarea>
              <div style={{ color: 'red' }}>{this.state.descEror}</div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-6">
              <label htmlFor="selectFiliere" className="block text-sm font-medium text-gray-700">
                Filiere:
              </label>
              <select
                name="listefilieres"
                id="selactfiliere"
                value={this.state.selectFiliere}
                onChange={this.onChangeSelectFiliere}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {this.state.listefilieres.map((listefilieres) => (
                  <option value={listefilieres.id_Filiere}>{listefilieres.name}</option>
                ))}
              </select>
              <div style={{ color: 'red' }}>{this.state.selectFiliereEror}</div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end">
            <button
              style={{ float: 'right' }}
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={this.annuler}
            >
              Annuler
            </button>
            <button
              style={{ float: 'right' }}
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    );
  }
}
