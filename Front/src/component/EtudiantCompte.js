import React, { Component } from "react";
import Axios from "axios";
import ChartModuleEtdnt from "../charts/ChartModuleEtdnt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class EtudiantCompte extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      val: "",
      nom: "",
      prenom: "",
      cin: "",
      cne: "",
      adresse: "",
      date_Naissance: "",
      telephone: "",
      email: "",
      id_Filiere: "",
      nom_filiere: "",
      sujet: "",
      desc: "",
      urlImage: null,
    };
  }

  handleChange(event) {
    console.log("*******************************");
    this.setState({
      urlImage: URL.createObjectURL(event.target.files[0]),
    });

    const etudiant = {
      urlImage: URL.createObjectURL(event.target.files[0]),
    };
    console.log(
      "image----------------------->",
      URL.createObjectURL(event.target.files[0])
    );
    console.log("id_etudiant", localStorage.getItem("user"));

    Axios.put(
      "http://localhost:5000/etudiants/" + localStorage.getItem("user"),
      etudiant
    )
      .then((res) => {
        console.log("etudaint---------------> ", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    const i = localStorage.getItem("user");
    const { id } = this.props.match.params;
    if(id){
      Axios.get("http://localhost:5000/etudiants/" + id)
      .then((res) => {
        console.log("etudaint---------------> ", res.data);
        this.setState({
          nom: res.data.first_name,
          prenom: res.data.last_name,
          email: res.data.email,
          adresse: res.data.adresse,
          cin: res.data.cin,
          cne: res.data.cne,
          date_Naissance: res.data.date_naissance,
          telephone: res.data.telephone,
          id_Filiere: res.data.id_Filiere,
        });

        console.log("urlimage --------------------->", res.data.urlImage);
      })
      .catch((error) => {
        console.log(error);
      });
    }else{
      Axios.get("http://localhost:5000/etudiants/" + i)
      .then((res) => {
        console.log("etudaint---------------> ", res.data);
        this.setState({
          nom: res.data.first_name,
          prenom: res.data.last_name,
          email: res.data.email,
          adresse: res.data.adresse,
          cin: res.data.cin,
          cne: res.data.cne,
          date_Naissance: res.data.date_naissance,
          telephone: res.data.telephone,
          id_Filiere: res.data.id_Filiere,
        });

        console.log("urlimage --------------------->", res.data.urlImage);
      })
      .catch((error) => {
        console.log(error);
      });
    }


    var iy = this.state.id_Filiere;
    console.log("id_Filiere ---------------------> ", iy);

    Axios.get("http://localhost:5000/filieres/" + 1)
      .then((res) => {
        console.log("filiere by id ----------------->", res.data);
        this.setState({
          nom_filiere: res.data.name,
          abreviation: res.data.abreviation,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    Axios.get("http://localhost:5000/annonces/ByIdFiliere/" + 2)
      .then((res) => {
        console.log("annonces where id filiere ------>", res.data.data[0]);
        toast.info(res.data.data[0].sujet + ": " + res.data.data[0].desc, {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        this.setState({
          sujet: res.data.data[0].sujet,
          desc: res.data.data[0].desc,
          created: res.data.data[0].created,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="mt-6">
        <ToastContainer
          position="top-right"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Compte Etudiant
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Données personnelles de l'étudiant.
          </p>
        </div>

        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Nom complet
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {this.state.nom} {this.state.prenom}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {this.state.email}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {this.state.adresse}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                CNE
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {this.state.cne}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                CIN
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {this.state.cin}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Telephone
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {this.state.telephone}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Date de naissance
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {this.state.date_Naissance}
              </dd>
            </div>
          </dl>
        </div>

        <div className="px-4 py-6">
          <ChartModuleEtdnt className="nk" />
        </div>
      </div>
    );
  }
}
