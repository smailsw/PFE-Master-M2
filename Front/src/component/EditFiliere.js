import React, { Component } from 'react';
import { addfiliere } from '../service/serviceAddfiliere';
import history from '../history';
import Axios from 'axios';
const initialState = {
  nom_filiere: '',
  abreviation: '',
  nom_filiereEror: '',
  abreviationEror: ''
};

export default class EditFiliere extends Component {
  constructor(props) {
    super(props);
    this.onChangeNom_filiere = this.onChangeNom_filiere.bind(this);
    this.onChangeAbreviation = this.onChangeAbreviation.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = initialState;
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/filieres/' + this.props.match.params.id)
      .then((res) => {
        console.log('res.data.id', res.data);
        this.setState({
          nom_filiere: res.data.name,
          abreviation: res.data.abreviation
        });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeNom_filiere(e) {
    this.setState({
      nom_filiere: e.target.value
    });
  }

  onChangeAbreviation(e) {
    this.setState({
      abreviation: e.target.value
    });
  }

  validate = () => {
    let nom_filiereEror = '';
    let abreviationEror = '';

    if (!this.state.nom_filiere) {
      nom_filiereEror = 'Le champ Nom de filière est obligatoire';
    }
    if (!this.state.abreviation) {
      abreviationEror = 'Le champ abréviation est obligatoire';
    }

    if (nom_filiereEror || abreviationEror) {
      this.setState({ nom_filiereEror, abreviationEror });
      return false;
    }

    return true;
  };

  onClick() {
    console.log('********!!!!!!!!!!**************!!!!!!!!!!!!*');
    const filiere = {
      name: this.state.nom_filiere,
      abreviation: this.state.abreviation
    };
    console.log(filiere);

    const isValid = this.validate();
    if (isValid) {
      console.log(filiere);

      Axios.put('http://localhost:5000/filieres/' + this.props.match.params.id, filiere)
        .then((res) => console.log(res.data));
      alert('La filière a été modifiée');
      this.props.history.push('/filieres');
    } else {
      console.log("Il y a un problème dans la validation des informations");
    }
  }

  annuler(e) {
    history.push('/filieres');
    window.location.reload(false);
  }

  render() {
    return (
      <div className="admin-container">
        <form onSubmit={this.onSubmit} className="text border border-light p-5">
          <div className={this.state.addS == null ? 'hidden' : ''}>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>{this.state.addS}</strong>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <b>Modifier une filière</b>
          <hr className="my-4" />
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="nom_filiere" className="block text-sm font-medium text-gray-700">
                Nom de filière:
              </label>
              <input
                type="text"
                required
                placeholder="Nom de filière"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.nom_filiere}
                onChange={this.onChangeNom_filiere}
              />
              <div style={{ color: 'red' }}>{this.state.nom_filiereEror}</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="abreviation" className="block text-sm font-medium text-gray-700">
                Abreviation:
              </label>
              <input
                type="text"
                required
                placeholder="Abreviation"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={this.state.abreviation}
                onChange={this.onChangeAbreviation}
              />
              <div style={{ color: 'red' }}>{this.state.abreviationEror}</div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end">
            <button
              style={{ float: 'right' }}
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={this.onClick}
            >
              Modifier
            </button>
            <button
              style={{ float: 'right' }}
              type="button"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
