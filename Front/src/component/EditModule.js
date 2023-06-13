import React, { Component } from 'react';
import Axios from 'axios';
import history from '../history';

const initialState = {
  nom_module: '',
  nbrHeur: '',
  selectProf: '',
  selectFiliere: '',
  listeprofs: [],
  listefilieres: [],
  nom_moduleEror: '',
  nbrHeurEror: ''
};

export default class EditModule extends Component {
  constructor(props) {
    super(props);
    this.onChangeNom_module = this.onChangeNom_module.bind(this);
    this.onChangeNbrHeur = this.onChangeNbrHeur.bind(this);
    this.onChangeSelectProf = this.onChangeSelectProf.bind(this);
    this.onChangeSelectFiliere = this.onChangeSelectFiliere.bind(this);
    this.onClick = this.onClick.bind(this);

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

  /*la fonction de validation */

  validate = () => {
    let nom_moduleEror = '';
    let nbrHeurEror = '';

    if (!this.state.nom_module) {
      nom_moduleEror = 'le champ Nom de module est obligatoire';
    }
    if (!this.state.nbrHeur) {
      nbrHeurEror = "le champ nombre d'heur est obligatoire";
    }

    if (nom_moduleEror || nbrHeurEror) {
      this.setState({ nom_moduleEror, nbrHeurEror });
      return false;
    }

    return true;
  };

  componentDidMount() {
    Axios.get('http://localhost:5000/filieres/')
      .then((res) => {
        this.setState({ listefilieres: res.data.data });
        console.log('listfilieres', res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    Axios.get('http://localhost:5000/profs/')
      .then((res) => {
        this.setState({ listeprofs: res.data.data });
        console.log('listprof', res.data.data[0].id_Prof);
      })
      .catch((error) => {
        console.log(error);
      });
    Axios.get('http://localhost:5000/modules/' + this.props.match.params.id)
      .then((res) => {
        console.log('res.data', res.data);
        this.setState({
          nom_module: res.data.name,
          nbrHeur: res.data.nbrHeur,
          selectProf: res.data.id_Prof,
          selectFiliere: res.data.id_Filiere
        });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onClick() {
    console.log('********!!!!!!!!!!**************!!!!!!!!!!!!*');
    const module = {
      name: this.state.nom_module,
      nbrHeur: this.state.nbrHeur,
      id_Prof: this.state.selectProf,
      id_Filiere: this.state.selectFiliere
    };
    console.log(module);

    const isValid = this.validate();
    if (isValid) {
      console.log(module);

      Axios.put('http://localhost:5000/modules/' + this.props.match.params.id, module)
        .then((res) => console.log(res.data));
      alert('module a est modifié');
      this.props.history.push('/modules');
    } else {
      console.log("il y a un problème dans la validation des informations");
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
          <h3 className="text-lg font-semibold leading-6 text-gray-900">Modifier un module</h3>
          <hr className="my-4" />
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="nom_module" className="block text-sm font-medium text-gray-700">
                Nom de module:
              </label>
              <input
                type="text"
                required
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
              type="button"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={this.onClick}
            >
              Modifier
            </button>
          </div>
        </form>
      </div>
    );
  }
}
