import React, { Component } from "react";
import Axios from "axios";
import "../css/admin.css";
import history from "../history";
import Papa from "papaparse";
import { addadmin } from "../service/serviceAddadmin";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
      admins: [],
      listFilter: [],
      csvfile: undefined,
    };
  }

  handleChange = (event) => {
    this.setState({
      csvfile: event.target.files[0],
    });
  };

  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true,
    });
  };

  updateData = (result) => {
    console.log("You are here updateData() !!!!!!!!!!!!!!!!!!!!!!", result);
    var data = result.data;
    console.log("data[0]--------->", data[0]);
    console.log("data[1]--------->", data[1]);
    console.log("data.length--------->", data.length);
    for (let index = 0; index < data.length - 1; index++) {
      addadmin(data[index]).then((res) => {
        console.log("It is sent!");
      });
    }
  };

  componentDidMount() {
    Axios.get("http://localhost:5000/admins/")
      .then((res) => {
        this.setState({
          admins: res.data.data,
          listFilter: res.data.data,
        });
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addAdmin(url) {
    console.log("Here ------------");
    history.push(url);
    window.location.reload(false);
  }

  addListeAdmin(url) {
    console.log("Here ------------");
    history.push(url);
    window.location.reload(false);
  }

  onClick(Id) {
    console.log("Go ----------------->");
    history.push("/EditAdmin/" + Id);
    window.location.reload(false);
  }

  deleteAdmin(id) {
    console.log(id);
    Axios.delete("http://localhost:5000/admins/delete/" + id)
      .then((res) => console.log(res.data))
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });

    alert("Are you sure you want to delete this Admin?");
    window.location.reload(false);
    console.log("Here *************************");
  }

  OnchangeState = (e) => {
    this.setState(
      {
        val: e.target.value,
      },
      () => {
        this.setState({
          listFilter: this.state.admins.filter((elm) =>
            elm.last_name.includes(this.state.val)
          ),
        });
      }
    );
    console.log(this.state.val);
  };

  render() {
    const admin =
      Array.isArray(this.state.listFilter) &&
      this.state.listFilter.map((admin) => {
        return (
          <tr key={admin._id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
              {admin.last_name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {admin.first_name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {admin.email}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {admin.adresse}
            </td>
            <td className=" relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
              <button
                className="text-indigo-600 hover:text-indigo-900 mr-3"
                onClick={() => this.onClick(admin.id)}
              >
                Edit<span className="sr-only">, {admin.last_name}</span>
              </button>
              <button
                className="text-indigo-600 hover:text-indigo-900"
                onClick={() => this.deleteAdmin(admin.id)}
              >
                Delete<span className="sr-only">, {admin.last_name}</span>
              </button>
            </td>
          </tr>
        );
      });

    return (
      <div className="admin-container">
        <div className=" border-gray-200 bg-white pr-4 py-0 sm:pr-6 pb-3">
          <h3 className="text-lg font-semibold leading-6 text-gray-900">
            La liste des administrateurs
          </h3>
        </div>
        <div className="row">
          <div className="col-sm-10 mt-2 flex mb-2">
            <input
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="search"
              placeholder="Recherche par Nom"
              value={this.state.val}
              onChange={this.OnchangeState}
            />
            <div className="col-sm-1">
              <button
                className="btn add-admin-button"
                onClick={() => this.addAdmin("/addAdmin")}
              >
                <i className="fa fa-trash-o">
                  <img
                    src="https://img.icons8.com/fluent/40/000000/add-user-male.png"
                    alt=""
                  />
                </i>
              </button>
            </div>
            <div className="col-sm-1">
              <button
                className="btn add-liste-admin-button"
                onClick={() => this.addListeAdmin("/addListeAdmin")}
              >
                <i className="fa fa-trash-o">
                  <img
                    src="https://img.icons8.com/fluent/40/000000/add-file.png"
                    alt=""
                  />
                </i>
              </button>
            </div>
          </div>
        </div>
        <div className="db">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                >
                  Nom
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Prénom
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Adresse
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>{admin}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
