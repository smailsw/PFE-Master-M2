import React, { Component } from 'react';
import Axios from 'axios';
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
  addS: null,
};

export default class EditProf extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/profs/' + this.props.match.params.id)
      .then((res) => {
        const profData = res.data;
        this.setState({
          nom: profData.first_name,
          prenom: profData.last_name,
          email: profData.email,
          adresse: profData.adresse,
          sexe: profData.sexe,
          cin: profData.cin,
          telephone: profData.telephone,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeNom = (e) => {
    this.setState({
      nom: e.target.value,
    });
  };

  onChangePrenom = (e) => {
    this.setState({
      prenom: e.target.value,
    });
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onChangeAdresse = (e) => {
    this.setState({
      adresse: e.target.value,
    });
  };

  onChangeSexe = (e) => {
    this.setState({
      sexe: e.target.value,
    });
  };

  onChangeCin = (e) => {
    this.setState({
      cin: e.target.value,
    });
  };

  onChangeTelephone = (e) => {
    this.setState({
      telephone: e.target.value,
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
        telephoneEror,
      });
      return false;
    }

    return true;
  };

  onClick = () => {
    const prof = {
      first_name: this.state.nom,
      last_name: this.state.prenom,
      email: this.state.email,
      adresse: this.state.adresse,
      sexe: this.state.sexe,
      cin: this.state.cin,
      telephone: this.state.telephone,
    };

    const isValid = this.validate();
    if (isValid) {
      Axios.put('http://localhost:5000/profs/' + this.props.match.params.id, prof)
        .then((res) => {
          console.log(res.data);
          this.setState({
            addS: 'Professeur Modifié',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Il y a un problème lors de la validation des informations.");
    }
  };

  annuler = () => {
    history.push('/professeurs');
    window.location.reload(false);
  };

  render() {
    return (
      <div className="db">
        <form className="text p-3">
          <div className={this.state.addS == null ? 'hidden' : ''}>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>{this.state.addS}</strong>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <h3>Modifier un professeur</h3>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Nom:</label>
              <input
                type="text"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.nom}
                onChange={this.onChangeNom}
              />
              <div style={{ color: 'red' }}>{this.state.nomEror}</div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Prénom:</label>
              <input
                type="text"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.prenom}
                onChange={this.onChangePrenom}
              />
              <div style={{ color: 'red' }}>{this.state.prenomEror}</div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="text"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
              <div style={{ color: 'red' }}>{this.state.emailEror}</div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Adresse:</label>
              <input
                type="text"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.adresse}
                onChange={this.onChangeAdresse}
              />
              <div style={{ color: 'red' }}>{this.state.adresseEror}</div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Sexe:</label>
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
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">CIN:</label>
              <input
                type="text"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.cin}
                onChange={this.onChangeCin}
              />
              <div style={{ color: 'red' }}>{this.state.cinEror}</div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Téléphone:</label>
              <input
                type="text"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.telephone}
                onChange={this.onChangeTelephone}
              />
              <div style={{ color: 'red' }}>{this.state.telephoneEror}</div>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="button"
              style={{ float: 'right' }}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={this.onClick}
            >
              Modifier
            </button>
            <button
              type="button"
              style={{ float: 'right' }}
              className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={this.annuler}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    );
  }
}
