import React, { Component } from 'react';
import Axios from 'axios';
import '../css/admin.css';

export default class addAbsence extends Component {
  constructor(props) {
    super(props);
    this.OnchangeState = this.OnchangeState.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      val: '',
      etudiants: [],
      listFilter: [],
      seances: [],
      listFilterSeance: [],
      nom_module: '',
      id: '',
      absent: '',
      absenceId: '',
      selectModule: '',
      selectFiliere: '',
      nameM: '',
      nameF: '',

      idM: 1,
      idF: 1
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/seances/' + this.props.match.params.id)
      .then((res) => {
        if (res.data.id_Module === 1) {
          this.setState({
            nameM: 'Java',
            nameF: 'GED',
            idM: 1,
            idF: 1
          });
        }
        if (res.data.id_Module === 2) {
          this.setState({
            nameM: 'WEB',
            nameF: 'GI'
          });
        }
        if (res.data.id_Module === 3) {
          this.setState({
            nameM: 'Reseaux',
            nameF: 'TM'
          });
        }
        if (res.data.id_Module === 4) {
          this.setState({
            nameM: 'UML',
            nameF: 'ISIL'
          });
        }

        this.setState({
          seances: res.data.data,
          listFilterSeance: res.data.data
        });
      })
      .catch((error) => {
        console.log(error);
      });

    Axios.get('http://localhost:5000/etudiants/')
      .then((res) => {
        this.setState({
          etudiants: res.data.data,
          listFilter: res.data.data
        });
        console.log('id', res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();
    alert("Vous avez pris l'absence des étudiants");
    this.props.history.push('/absences');
    window.location.reload(false);
  }

  handleChange({ target }) {
    if (target.checked) {
      target.removeAttribute('checked');
      const abs = {
        id_Etudiant: target.name,
        id_Module: this.state.idM,
        id_Seance: this.props.match.params.id,
        id_Filiere: this.state.idF
      };
      Axios.post('http://localhost:5000/absences/AddAbsence', abs)
        .then((response) => {
          console.log(response);
          console.log('Absence added successfully!');
        })
        .catch((error) => {
          console.log(error);
        });
      target.parentNode.style.textDecoration = '';
    } else {
      target.setAttribute('checked', true);
      target.parentNode.style.textDecoration = 'line-through';
    }
  }

  OnchangeState(e) {
    this.setState(
      {
        val: e.target.value
      },
      () => {
        this.setState({
          listFilter: this.state.etudiants.filter((elm) => elm.nom.includes(this.state.val))
        });
      }
    );
    console.log(this.state.val);
  }

  annuler() {
    this.props.history.push('/seances');
    window.location.reload(false);
  }

  render() {
    const etudiant =
      Array.isArray(this.state.listFilter) &&
      this.state.listFilter.map((etudiant) => {
        return (
          <tr key={etudiant._id_Etudiant} className="even:bg-gray-50">
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
              {etudiant.last_name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{etudiant.first_name}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{etudiant.cne}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{etudiant.cin}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{this.state.nameM}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{this.state.nameF}</td>
            <td>
              <input
                type="checkbox"
                name={etudiant.id_Etudiant}
                value={this.state.id_Module}
                onClick={this.handleChange}
                defaultChecked={this.props.complete}
              />
            </td>
          </tr>
        );
      });

    return (
      <div className="admin-container">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">Tous les étudiants</h3>
        <div className="row">
          <div className="col-sm-10 mt-2 flex mb-2">
            <input
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="search"
              placeholder="Recherche par Nom"
              value={this.state.val}
              onChange={this.OnchangeState}
            />
          </div>
        </div>

        <div className="db">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                  Nom
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Prénom
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  CNE
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  CIN
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Module
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Filière
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                  <span className="sr-only">Affecter un absence</span>
                </th>
              </tr>
            </thead>
            <tbody>{etudiant}</tbody>
          </table>
        </div>
        <div className="mt-6 flex items-center justify-end">
        <button
                style={{ float: 'right' }}
                type="button"
                className="mr-4 text-sm font-semibold leading-6 text-gray-900"
                 onClick={this.annuler}
              >
                Annuler
              </button>
            <button
              style={{ float: 'right' }}
              type="button"
              className=" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={this.onSubmit}
            >
              Valider
            </button>

          </div>

      </div>
    );
  }
}
