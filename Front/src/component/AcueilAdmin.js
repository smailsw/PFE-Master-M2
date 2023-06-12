import React, { Component } from 'react';
import '../css/admin.css';
import ChartEtudiant from '../charts/ChartEtudiant';
import ChartFiliereAbs from '../charts/ChartFiliereAbs';

export default class AcueilAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container mx-auto">
        <div className="relative">
          <img className="w-full" src="https://www.itlearning-campus.com/wp-content/uploads/2021/05/main_slide.jpeg" alt="First slide" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-bold text-white">IT Learning Campus</h2>
              <h4 className="text-xl font-bold text-white">
              Faculté des Sciences et Techniques de Settat
              </h4>
            </div>
          </div>
        </div>

        {/* <div className="flex">
          <div className="w-1/2 border border-gray-300 p-5">
            <h5 className="text-center">Nombre des Etudiants et des Etudiantes dans Ecole</h5>
            <ChartEtudiant />
          </div>
          <div className="w-1/2 border border-gray-300 p-5">
            <ChartFiliereAbs />
          </div>
        </div> */}
      </div>
    );
  }
}
