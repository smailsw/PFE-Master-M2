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
  cne: '',
  date_naissance: '',
  telephone: '',
  nomEror: '',
  prenomEror: '',
  emailEror: '',
  adresseEror: '',
  sexeEror: '',
  cinEror: '',
  cneEror: '',
  date_naissanceEror: '',
  telephoneEror: '',
  listefilieres: [],
  selectFiliere: '',
  message: ''
};

export default class EditEdudiant extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    Axios.get(`http://localhost:5000/etudiants/${this.props.match.params.id}`)
      .then((res) => {
        const etudiant = res.data;
        this.setState({
          nom: etudiant.first_name,
          prenom: etudiant.last_name,
          email: etudiant.email,
          adresse: etudiant.adresse,
          sexe: etudiant.sexe,
          cin: etudiant.cin,
          cne: etudiant.cne,
          date_naissance: etudiant.date_naissance,
          telephone: etudiant.telephone,
          selectFiliere: etudiant.id_Filiere
        });
      })
      .catch((error) => {
        console.log(error);
      });

    Axios.get('http://localhost:5000/filieres/')
      .then((res) => {
        this.setState({ listefilieres: res.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
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

  onChangeCne = (e) => {
    this.setState({
      cne: e.target.value
    });
  };

  onChangeDate_naissance = (e) => {
    this.setState({
      date_naissance: e.target.value
    });
  };

  onChangeTelephone = (e) => {
    this.setState({
      telephone: e.target.value
    });
  };

  onChangeSelectFiliere = (e) => {
    this.setState({
      selectFiliere: e.target.value
    });
  };

  validate = () => {
    let nomEror = '';
    let prenomEror = '';
    let emailEror = '';
    let adresseEror = '';
    let sexeEror = '';
    let cinEror = '';
    let cneEror = '';
    let date_naissanceEror = '';
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
    if (!this.state.cne) {
      cneEror = 'Le champ CNE est obligatoire.';
    }
    if (!this.state.date_naissance) {
      date_naissanceEror = 'Le champ date de naissance est obligatoire.';
    }
    if (!this.state.telephone) {
      telephoneEror = 'Le champ telephone est obligatoire.';
    }

    if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      emailEror = "l'email est non validé, il faut avoir la forme suivante : *****@****.***";
    }

    if (
      emailEror ||
      nomEror ||
      prenomEror ||
      adresseEror ||
      sexeEror ||
      cinEror ||
      cneEror ||
      date_naissanceEror ||
      telephoneEror
    ) {
      this.setState({
        emailEror,
        nomEror,
        prenomEror,
        adresseEror,
        sexeEror,
        cinEror,
        cneEror,
        date_naissanceEror,
        telephoneEror
      });
      return false;
    }

    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const etudiant = {
      first_name: this.state.nom,
      last_name: this.state.prenom,
      email: this.state.email,
      adresse: this.state.adresse,
      sexe: this.state.sexe,
      cin: this.state.cin,
      cne: this.state.cne,
      date_naissance: this.state.date_naissance,
      telephone: this.state.telephone,
      id_Filiere: this.state.selectFiliere
    };

    const isValid = this.validate();
    if (isValid) {
      Axios.put(`http://localhost:5000/etudiants/${this.props.match.params.id}`, etudiant)
        .then((res) => {
          console.log(res.data);
          alert("Utilisateur modifié");
          history.push('/etudiants');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Il y a un problème dans la validation des informations.");
    }
  };

  annuler = (e) => {
    history.push('/etudiants');
    window.location.reload(false);
  };

  render() {
    return (
      <div className="db">
        <form onSubmit={this.onSubmit} className="text border border-light p-5">
          <h3 className="text-lg font-semibold leading-6 text-gray-900">Modifier un étudiant</h3>
          <hr className="my-4" />
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                Nom:
              </label>
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
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
                Prénom:
              </label>
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
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
              <label htmlFor="adresse" className="block text-sm font-medium text-gray-700">
                Adresse:
              </label>
              <input
                type="text"
                required
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
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.cin}
                onChange={this.onChangeCin}
              />
              <div style={{ color: 'red' }}>{this.state.cinEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="cne" className="block text-sm font-medium text-gray-700">
                CNE:
              </label>
              <input
                type="text"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.cne}
                onChange={this.onChangeCne}
              />
              <div style={{ color: 'red' }}>{this.state.cneEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="date_naissance" className="block text-sm font-medium text-gray-700">
                Date de Naissance:
              </label>
              <input
                type="date"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.date_naissance}
                onChange={this.onChangeDate_naissance}
              />
              <div style={{ color: 'red' }}>{this.state.date_naissanceEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                Téléphone:
              </label>
              <input
                type="text"
                required
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.telephone}
                onChange={this.onChangeTelephone}
              />
              <div style={{ color: 'red' }}>{this.state.telephoneEror}</div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="selectFiliere" className="block text-sm font-medium text-gray-700">
                Filière:
              </label>
              <select
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={this.state.selectFiliere}
                onChange={this.onChangeSelectFiliere}
              >
                {this.state.listefilieres.map((filiere) => {
                  return (
                    <option key={filiere.id_Filiere} value={filiere.name}>
                      {filiere.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="flex justify-end pt-5">
            <button
              type="submit"
              className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Modifier
            </button>
            <button
              type="button"
              onClick={this.annuler}
              className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    );
  }
}
