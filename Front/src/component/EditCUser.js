import React, { Component } from 'react';
import Axios from 'axios';
import history from '../history';

const initialState = {
  id: '',
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

export default class EditCUser extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onClick = this.onClick.bind(this);
    this.annuler = this.annuler.bind(this);
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
      .then((res) => {
        console.log("res.data.id", res.data);
        this.setState({
          id: res.data.id,
          nom: res.data.first_name,
          prenom: res.data.last_name,
          email: res.data.email,
          password: res.data.password,
          role: res.data.role
        });
        console.log(res.data);
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
        .then((res) => console.log(res.data));
      alert("Utilisateur a est modifié");
    } else {
      console.log("Il y a un problème lors de la validation des informations.");
    }
  }

  annuler() {
    history.push('/admins');
    window.location.reload(false);
  }

  render() {
    return (
      <div>
        <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-2">Bienvenue dans votre compte Mr {this.state.nom}</h3>

        <form onSubmit={this.onSubmit} className="text p-5">
          <b className="text-lg font-normal leading-6 text-gray-900">Modifier les informations de votre compte</b>
          <hr className="my-4" />
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom:</label>
              <input
                type="text"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.nom}
                onChange={this.onChangeNom}
              />
              <div style={{ color: 'red' }}>{this.state.nomEror}</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom:</label>
              <input
                type="text"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.prenom}
                onChange={this.onChangePrenom}
              />
              <div style={{ color: 'red' }}>{this.state.prenomEror}</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="text"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
              <div style={{ color: 'red' }}>{this.state.emailEror}</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe:</label>
              <input
                type="password"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
              <div style={{ color: 'red' }}>{this.state.passwordEror}</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Rôle:</label>
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
              className="mr-2 ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={this.onClick}
            >
              Modifier
            </button>
            <button
              style={{ float: 'right' }}
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
