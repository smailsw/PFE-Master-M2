import React, { Component } from 'react';
import Axios from 'axios';
import history from '../history';

const initialState = {
  nom: '',
  prenom: '',
  email: '',
  password: '',
  role: '',
  nomEror: '',
  prenomEror: '',
  emailEror: '',
  passwordEror: '',
  roleEror: '',
  message: ''
};

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = initialState;
  }

  onChangeMessage(e) {
    this.setState({
      message: e.target.value
    });
  }

  onChangeNom(e) {
    this.setState({
      nom: e.target.value
    });
  }

  onChangePrenom(e) {
    this.setState({
      prenom: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeRole(e) {
    this.setState({
      role: e.target.value
    });
  }

  /*la fonction de validation */
  validate = () => {
    let nomEror = '';
    let prenomEror = '';
    let emailEror = '';
    let passwordEror = '';
    let roleEror = '';

    if (!this.state.nom) {
      nomEror = 'Le champ Nom est obligatoire.';
    }
    if (!this.state.prenom) {
      prenomEror = 'Le champ Prénom est obligatoire.';
    }
    if (!this.state.role) {
      roleEror = 'Le champ Rôle est obligatoire.';
    }
    if (!this.state.password.match(/^([\w.%+-]+)/i)) {
      passwordEror = 'Le champ Mot de passe est obligatoire.';
    }
    if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      emailEror = "L'email n'est pas valide. Veuillez entrer une adresse e-mail valide.";
    }
    if (emailEror || nomEror || prenomEror || passwordEror || roleEror) {
      this.setState({ emailEror, nomEror, prenomEror, passwordEror, roleEror });
      return false;
    }

    return true;
  };

  componentDidMount() {
    Axios.get('http://localhost:5000/users/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          nom: res.data.first_name,
          prenom: res.data.last_name,
          email: res.data.email,
          password: res.data.password,
          role: res.data.role
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onClick() {
    const user = {
      first_name: this.state.nom,
      last_name: this.state.prenom,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    };

    const isValid = this.validate();
    if (isValid) {
      Axios.put('http://localhost:5000/users/' + this.props.match.params.id, user)
        .then(res => {
          console.log(res.data);
          alert("Utilisateur a été modifié");
          this.props.history.push('/users');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Il y a un problème lors de la validation des informations.");
    }
  }

  annuler(e) {
    history.push('/users');
    window.location.reload(false);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="text border border-light p-5">
          <h3 className="text-lg font-semibold leading-6 text-gray-900">Modifier un utilisateur</h3>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe:
              </label>
              <input
                type="password"
                required
                placeholder="Mot de passe"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
              <div style={{ color: 'red' }}>{this.state.passwordEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Rôle:
              </label>
              <select
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={this.state.role}
                onChange={this.onChangeRole}
              >
                <option value="Admin">Admin</option>
                <option value="Prof">Prof</option>
                <option value="Etudiant">Etudiant</option>
              </select>
              <div style={{ color: 'red' }}>{this.state.roleEror}</div>
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
