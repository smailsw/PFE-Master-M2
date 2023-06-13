import React, { Component } from 'react';
import { addmodule } from '../service/serviceAddmodule';
import Axios from 'axios';
import history from '../history';

const initialState = {
  nom_module: '',
  nbrHeur: '',
  selectProf: '',
  listeprofs: [],
  selectFiliere: '',
  listefilieres: [],
  nom_moduleEror: '',
  nbrHeurEror: '',
  selectFiliereEror: '',
  addS: null
};

export default class addModule extends Component {
  constructor(props) {
    super(props);
    this.onChangeNom_module = this.onChangeNom_module.bind(this);
    this.onChangeNbrHeur = this.onChangeNbrHeur.bind(this);
    this.onChangeSelectProf = this.onChangeSelectProf.bind(this);
    this.onChangeSelectFiliere = this.onChangeSelectFiliere.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.annuler = this.annuler.bind(this);

    this.state = initialState;
  }

  onChangeNom_module(e) {
    this.setState({
      nom_module: e.target.value
    });
  }

  onChangeNbrHeur(e) {
    this.setState({
      nbrHeur: e.target.value
    });
  }

  onChangeSelectProf(e) {
    this.setState({
      selectProf: e.target.value
    });
  }

  onChangeSelectFiliere(e) {
    this.setState({
      selectFiliere: e.target.value
    });
  }

  validate = () => {
    let nom_moduleEror = '';
    let nbrHeurEror = '';
    let selectFiliereEror = '';

    if (!this.state.nom_module) {
      nom_moduleEror = 'Le champ Nom de module est obligatoire.';
    }
    if (!this.state.nbrHeur) {
      nbrHeurEror = "Le champ nombre d'heur est obligatoire.";
    }
    if (!this.state.selectFiliere) {
      selectFiliereEror = 'Le champ filiere est obligatoire.';
    }

    if (nom_moduleEror || nbrHeurEror || selectFiliereEror) {
      this.setState({ nom_moduleEror, nbrHeurEror, selectFiliereEror });
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

    Axios.get('http://localhost:5000/profs/')
      .then((res) => {
        this.setState({ listeprofs: res.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();
    const module = {
      nom_module: this.state.nom_module,
      nbrHeur: this.state.nbrHeur,
      selectProf: this.state.selectProf,
      selectFiliere: this.state.selectFiliere
    };

    const isValid = this.validate();
    if (isValid) {
      addmodule(module)
        .then((res) => {
          console.log('Le module a été ajouté.');
          this.setState(initialState);
          this.setState({
            addS: 'Module Ajouté'
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
    history.push('/modules');
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
          <h3 className="text-lg font-semibold leading-6 text-gray-900">Ajouter un module</h3>
          <hr className="my-4" />
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="nom_module" className="block text-sm font-medium text-gray-700">
                Nom de module:
              </label>
              <input
                type="text"
                required
                placeholder="Nom de module"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.nom_module}
                onChange={this.onChangeNom_module}
              />
              <div style={{ color: 'red' }}>{this.state.nom_moduleEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="nbrHeur" className="block text-sm font-medium text-gray-700">
                Nombre d'heures:
              </label>
              <input
                type="text"
                required
                placeholder="Nombre d'heures"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.nbrHeur}
                onChange={this.onChangeNbrHeur}
              />
              <div style={{ color: 'red' }}>{this.state.nbrHeurEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
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

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="selectProf" className="block text-sm font-medium text-gray-700">
                Professeur:
              </label>
              <select
                name="listeprofs"
                value={this.state.selectProf}
                onChange={this.onChangeSelectProf}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {this.state.listeprofs.map((listeprofs) => (
                  <option value={listeprofs.id_Prof}>{listeprofs.first_name}</option>
                ))}
              </select>
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
