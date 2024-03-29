import React, { Component } from 'react';
import Axios from 'axios';
import history from '../history';

const initialState = {
  nom: '',
  prenom: '',
  email: '',
  adresse: '',
  nomEror: '',
  prenomEror: '',
  emailEror: '',
  adresseEror: ''
};

export default class EditAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/admins/' + this.props.match.params.id)
      .then((res) => {
        console.log('res.data.id', res.data);
        this.setState({
          nom: res.data.first_name,
          prenom: res.data.last_name,
          email: res.data.email,
          adresse: res.data.adresse
        });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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

  validate = () => {
    let nomEror = '';
    let prenomEror = '';
    let emailEror = '';
    let adresseEror = '';

    if (!this.state.nom) {
      nomEror = 'Le champ Nom est obligatoire';
    }
    if (!this.state.prenom) {
      prenomEror = 'Le champ Prénom est obligatoire';
    }
    if (!this.state.adresse) {
      adresseEror = 'Le champ adresse est obligatoire';
    }
    if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      emailEror = 'L\'email n\'est pas valide. Veuillez utiliser la forme suivante : *****@****.***';
    }

    if (emailEror || nomEror || prenomEror || adresseEror) {
      this.setState({ emailEror, nomEror, prenomEror, adresseEror });
      return false;
    }

    return true;
  };

  onClick = () => {
    const admin = {
      first_name: this.state.nom,
      last_name: this.state.prenom,
      email: this.state.email,
      adresse: this.state.adresse
    };

    const isValid = this.validate();
    if (isValid) {
      Axios.put('http://localhost:5000/admins/' + this.props.match.params.id, admin)
        .then((res) => console.log(res.data));
      alert('Admin a été modifié');
      this.props.history.push('/admins');
    } else {
      console.log("Il y a un problème dans la validation des informations");
    }
  };

  annuler = () => {
    history.push('/admins');
    window.location.reload(false);
  };

  render() {
    return (
      <div className="db">
        <form onSubmit={this.onSubmit} className="text border border-light p-5">
          <div className="border-gray-200 bg-white pr-4 py-0 sm:pr-6 pb-3">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">
              Modifier un administrateur
            </h3>
          </div>

          <div className="space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="nom" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Nom:
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  required
                  placeholder="Nom"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={this.state.nom}
                  onChange={this.onChangeNom}
                />
                <div style={{ color: 'red' }}>{this.state.nomEror}</div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="prenom" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Prénom:
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  required
                  placeholder="Prénom"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={this.state.prenom}
                  onChange={this.onChangePrenom}
                />
                <div style={{ color: 'red' }}>{this.state.prenomEror}</div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Email:
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  required
                  placeholder="Email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
                <div style={{ color: 'red' }}>{this.state.emailEror}</div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="adresse" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Adresse:
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  required
                  placeholder="Adresse"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={this.state.adresse}
                  onChange={this.onChangeAdresse}
                />
                <div style={{ color: 'red' }}>{this.state.adresseEror}</div>
              </div>
            </div>

            {/* Add other form fields here */}
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              style={{ float: 'right' }}
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={this.annuler}
            >
              Annuler
            </button>
            <button
              style={{ float: 'right' }}
              type="button"
              className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
