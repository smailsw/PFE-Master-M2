import React, { Component } from 'react';
import { addseance } from '../service/serviceAddseance';
import Axios from 'axios';
import history from '../history';

const initialState = {
  date_Seance: '',
  heurDebut: '',
  heurFin: '',
  selectModule: '',
  listemodules: [],
  type_Seance: '',
  selectFiliere: '',
  listefilieres: [],
  date_SeanceEror: '',
  heurDebutEror: '',
  heurFinEror: '',
  type_SeanceEror: '',
  selectModuleEror: '',
  selectFiliereEror: '',
  addS: null
};

export default class addSeance extends Component {
  constructor(props) {
    super(props);
    this.onChangeDate_Seance = this.onChangeDate_Seance.bind(this);
    this.onChangeHeurDebut = this.onChangeHeurDebut.bind(this);
    this.onChangeHeurFin = this.onChangeHeurFin.bind(this);
    this.onChangeSelectModule = this.onChangeSelectModule.bind(this);
    this.onChangeType_Seance = this.onChangeType_Seance.bind(this);
    this.onChangeSelectFiliere = this.onChangeSelectFiliere.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.annuler = this.annuler.bind(this);

    this.state = initialState;
  }

  onChangeDate_Seance(e) {
    this.setState({
      date_Seance: e.target.value
    });
  }

  onChangeHeurDebut(e) {
    this.setState({
      heurDebut: e.target.value
    });
  }

  onChangeHeurFin(e) {
    this.setState({
      heurFin: e.target.value
    });
  }

  onChangeSelectModule(e) {
    this.setState({
      selectModule: e.target.value
    });
  }

  onChangeType_Seance(e) {
    this.setState({
      type_Seance: e.target.value
    });
  }

  onChangeSelectFiliere(e) {
    this.setState({
      selectFiliere: e.target.value
    });
  }

  validate = () => {
    let date_SeanceEror = '';
    let heurDebutEror = '';
    let heurFinEror = '';
    let selectModuleEror = '';
    let type_SeanceEror = '';
    let selectFiliereEror = '';

    if (!this.state.date_Seance) {
      date_SeanceEror = 'Le champ date de séance est obligatoire.';
    }
    if (!this.state.heurDebut) {
      heurDebutEror = 'Le champ heure de début est obligatoire.';
    }
    if (!this.state.heurFin) {
      heurFinEror = 'Le champ heure de fin est obligatoire.';
    }
    if (!this.state.selectModule) {
      selectModuleEror = 'Le champ module est obligatoire.';
    }
    if (!this.state.type_Seance) {
      type_SeanceEror = 'Le champ type de séance est obligatoire.';
    }
    if (!this.state.selectFiliere) {
      selectFiliereEror = 'Le champ filière est obligatoire.';
    }

    if (
      date_SeanceEror ||
      heurDebutEror ||
      heurFinEror ||
      selectModuleEror ||
      type_SeanceEror ||
      selectFiliereEror
    ) {
      this.setState({
        date_SeanceEror,
        heurDebutEror,
        heurFinEror,
        selectModuleEror,
        type_SeanceEror,
        selectFiliereEror
      });
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

    Axios.get('http://localhost:5000/modules/')
      .then((res) => {
        this.setState({ listemodules: res.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();
    const seance = {
      date_Seance: this.state.date_Seance,
      heurDebut: this.state.heurDebut,
      heurFin: this.state.heurFin,
      type_Seance: this.state.type_Seance,
      selectModule: this.state.selectModule,
      selectFiliere: this.state.selectFiliere
    };

    const isValid = this.validate();
    if (isValid) {
      addseance(seance)
        .then((res) => {
          console.log('La séance a été ajoutée.');
          this.setState(initialState);
          this.setState({
            addS: 'Séance Ajoutée'
          });
        })
        .catch((error) => {
          console.log('Erreur lors de l\'envoi', error);
        });
    } else {
      console.log('Il y a un problème lors de la validation des informations.');
    }
  }

  annuler(e) {
    history.push('/seances');
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
          <h3 className="text-lg font-semibold leading-6 text-gray-900">Ajouter une séance</h3>
          <hr className="my-4" />
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="selectFiliere" className="block text-sm font-medium text-gray-700">
                Filière:
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
              <label htmlFor="selectModule" className="block text-sm font-medium text-gray-700">
                Module:
              </label>
              <select
                name="listemodules"
                id="selactmodule"
                value={this.state.selectModule}
                onChange={this.onChangeSelectModule}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {this.state.listemodules.map((listemodules) => (
                  <option value={listemodules.id_Module}>{listemodules.name}</option>
                ))}
              </select>
              <div style={{ color: 'red' }}>{this.state.selectModuleEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="date_Seance" className="block text-sm font-medium text-gray-700">
                Date de séance:
              </label>
              <input
                type="date"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.date_Seance}
                onChange={this.onChangeDate_Seance}
              />
              <div style={{ color: 'red' }}>{this.state.date_SeanceEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="heurDebut" className="block text-sm font-medium text-gray-700">
                Heure de début:
              </label>
              <input
                type="time"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.heurDebut}
                onChange={this.onChangeHeurDebut}
              />
              <div style={{ color: 'red' }}>{this.state.heurDebutEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="heurFin" className="block text-sm font-medium text-gray-700">
                Heure de fin:
              </label>
              <input
                type="time"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.heurFin}
                onChange={this.onChangeHeurFin}
              />
              <div style={{ color: 'red' }}>{this.state.heurFinEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="type_Seance" className="block text-sm font-medium text-gray-700">
                Type de séance:
              </label>
              <select
                value={this.state.type_Seance}
                onChange={this.onChangeType_Seance}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="Cour">Cours</option>
                <option value="TP">TP</option>
                <option value="TD">TD</option>
              </select>
              <div style={{ color: 'red' }}>{this.state.type_SeanceEror}</div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end">
            <button
              style={{ float: 'right' }}
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
