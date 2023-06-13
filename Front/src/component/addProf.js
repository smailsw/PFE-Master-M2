import React, { Component } from 'react';
import { addprof } from '../service/serviceAddprof';
import history from '../history';

const initialState = {
  nom: '',
  prenom: '',
  email: '',
  adresse: '',
  sexe: '',
  cin: '',
  telephone: '',
  nomEror: '',
  prenomEror: '',
  emailEror: '',
  adresseEror: '',
  sexeEror: '',
  cinEror: '',
  telephoneEror: '',
  message: '',
  addS: null
};

export default class addProf extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onChangeMessage = (e) => {
    this.setState({
      message: e.target.value
    });
  };

  onChangeNom = (e) => {
    this.setState({
      nom: e.target.value
    });
  };

  onChangePrenom = (e) => {
    this.setState({
      prenom: e.target.value
    });
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  onChangeAdresse = (e) => {
    this.setState({
      adresse: e.target.value
    });
  };

  onChangeSexe = (e) => {
    this.setState({
      sexe: e.target.value
    });
  };

  onChangeCin = (e) => {
    this.setState({
      cin: e.target.value
    });
  };

  onChangeTelephone = (e) => {
    this.setState({
      telephone: e.target.value
    });
  };

  validate = () => {
    let nomEror = '';
    let prenomEror = '';
    let emailEror = '';
    let adresseEror = '';
    let sexeEror = '';
    let cinEror = '';
    let telephoneEror = '';

    if (!this.state.nom) {
      nomEror = 'Le champ Nom est obligatoire.';
    }
    if (!this.state.prenom) {
      prenomEror = 'Le champ Prénom est obligatoire.';
    }
    if (!this.state.adresse) {
      adresseEror = 'Le champ adresse est obligatoire.';
    }
    if (!this.state.sexe) {
      sexeEror = 'Le champ sexe est obligatoire.';
    }
    if (!this.state.cin) {
      cinEror = 'Le champ CNI est obligatoire.';
    }
    if (!this.state.telephone) {
      telephoneEror = 'Le champ téléphone est obligatoire.';
    }
    if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      emailEror = "L'email n'est pas valide. Veuillez entrer une adresse e-mail valide.";
    }
    if (
      emailEror ||
      nomEror ||
      prenomEror ||
      adresseEror ||
      sexeEror ||
      cinEror ||
      telephoneEror
    ) {
      this.setState({
        emailEror,
        nomEror,
        prenomEror,
        adresseEror,
        sexeEror,
        cinEror,
        telephoneEror
      });
      return false;
    }

    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const prof = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      email: this.state.email,
      adresse: this.state.adresse,
      sexe: this.state.sexe,
      cin: this.state.cin,
      telephone: this.state.telephone
    };

    const isValid = this.validate();
    if (isValid) {
      addprof(prof)
        .then((res) => {
          console.log("Il a été envoyé.");
          this.setState(initialState);
          this.setState({
            addS: "Un Professeur a été ajouté."
          });
        })
        .catch((error) => {
          console.log("Erreur lors de l'envoi", error);
        });
    } else {
      console.log("Il y a un problème lors de la validation des informations.");
    }
  };

  annuler = (e) => {
    history.push('/professeurs');
    window.location.reload(false);
  };

  render() {
    return (
      <div className="db">
        <form onSubmit={this.onSubmit} className="text border border-light p-5">
          <div className={this.state.addS == null ? 'hidden' : 'mb-2'}>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>{this.state.addS}</strong>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <h3 className="text-lg font-semibold leading-6 text-gray-900">Ajouter un professeur</h3>
          <hr className="my-4" />
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                Nom:
              </label>
              <input
                type="text"
                required
                placeholder="Nom"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.nom}
                onChange={this.onChangeNom}
              />
              <div style={{ color: 'red' }}>{this.state.nomEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
                Prénom:
              </label>
              <input
                type="text"
                required
                placeholder="Prénom"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.prenom}
                onChange={this.onChangePrenom}
              />
              <div style={{ color: 'red' }}>{this.state.prenomEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="text"
                required
                placeholder="Email"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
              <div style={{ color: 'red' }}>{this.state.emailEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="adresse" className="block text-sm font-medium text-gray-700">
                Adresse:
              </label>
              <input
                type="text"
                required
                placeholder="Adresse"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.adresse}
                onChange={this.onChangeAdresse}
              />
              <div style={{ color: 'red' }}>{this.state.adresseEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="sexe" className="block text-sm font-medium text-gray-700">
                Sexe:
              </label>
              <select
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={this.state.sexe}
                onChange={this.onChangeSexe}
              >
                <option value="H">H</option>
                <option value="F">F</option>
              </select>
              <div style={{ color: 'red' }}>{this.state.sexeEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="cin" className="block text-sm font-medium text-gray-700">
                CIN:
              </label>
              <input
                type="text"
                required
                placeholder="CIN"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.cin}
                onChange={this.onChangeCin}
              />
              <div style={{ color: 'red' }}>{this.state.cinEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                Téléphone:
              </label>
              <input
                type="text"
                required
                placeholder="Téléphone"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.telephone}
                onChange={this.onChangeTelephone}
              />
              <div style={{ color: 'red' }}>{this.state.telephoneEror}</div>
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
              onClick={this.onSubmit}
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    );
  }
}
