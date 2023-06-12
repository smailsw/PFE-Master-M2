import React, { Component } from 'react';
import Axios from 'axios';
import '../css/admin.css';
import history from '../history';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.OnchangeState = this.OnchangeState.bind(this);

    this.state = {
      val: '',
      users: [],
      listFilter: [],
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/users/')
      .then((res) => {
        this.setState({
          users: res.data.data,
          listFilter: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addUser(url) {
    console.log('ici ------------');
    history.push(url);
    window.location.reload(false);
  }

  addListeUser(url) {
    console.log('ici ------------');
    history.push(url);
    window.location.reload(false);
  }

  onClick(Id) {
    console.log('go----------------->');
    history.push('/EditUser/' + Id);
    window.location.reload(false);
  }

  deleteUser(id) {
    console.log(id);
    Axios.delete('http://localhost:5000/users/dellete/' + id)
      .then((res) => console.log(res.data))
      .then();

    alert('Vous êtes sûr de supprimer cet utilisateur ?!');
    window.location.reload(false);
    console.log('ici*************************');
  }

  OnchangeState(e) {
    this.setState(
      {
        val: e.target.value,
      },
      () => {
        this.setState({
          listFilter: this.state.users.filter((elm) => elm.last_name.includes(this.state.val)),
        });
      }
    );
    console.log(this.state.val);
  }

  render() {
    const user = Array.isArray(this.state.listFilter)
      ? this.state.listFilter.map((user) => (
          <tr key={user.id} className="even:bg-gray-50">
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
              {user.last_name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.first_name}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.email}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.role}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
              <button className="text-indigo-600 hover:text-indigo-900 mr-3" onClick={() => this.onClick(user.id)}>
                Edit<span className="sr-only">, {user.last_name}</span>
              </button>
              <button className="text-indigo-600 hover:text-indigo-900" onClick={() => this.deleteUser(user.id)}>
                Delete<span className="sr-only">, {user.last_name}</span>
              </button>
            </td>
          </tr>
        ))
      : null;

    return (
      <div className="admin-container">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">La liste des utilisateurs</h3>
        <div className="row">
          <div className="col-sm-10 mt-2 flex mb-2">
            <input
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="search"
              placeholder="Recherche par Nom"
              value={this.state.val}
              onChange={(e) => {
                this.OnchangeState(e);
              }}
            />
                      <div className="col-sm-1 mr-2 ml-2">
            <button class="btn" style={{ float: 'right', margin: '0px' }}>
              <i className="fa fa-trash-o" onClick={() => this.addUser('/addUser')}>
                <img src="https://img.icons8.com/fluent/40/000000/add-user-male.png" alt="" />
              </i>
            </button>
          </div>
          <div className="col-sm-1">
            <button class="btn" style={{ float: 'right', margin: '0px' }}>
              <i className="fa fa-trash-o" className="db" onClick={() => this.addListeUser('/addListeUser')}>
                <img src="https://img.icons8.com/fluent/40/000000/add-file.png" alt="" />
              </i>
            </button>
          </div>
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
                  Email
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Role
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>{user}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
