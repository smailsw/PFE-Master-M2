import React, { Component } from 'react'

import Axios from 'axios';
import ChartAbsenceModule from '../charts/ChartAbsenceModule'

import history from '../history';
import ChartFiliereAbs from '../charts/ChartFiliereAbs';
import ChartEtudiant from '../charts/ChartEtudiant';
import ChartTest from '../charts/ChatTest';

export default class GrafsAdmin extends Component {
    
    constructor(props) {
        super(props);
        
    }

    render() {

      

        return (
          <div className="db">
              <div className="row">
                <div className="col-md-6">
                <ChartFiliereAbs/>
                </div>
                <div className="col-md-6">
                <ChartEtudiant/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                <ChartAbsenceModule/>
                </div>
                <div className="col-md-6">
                <ChartTest/>
                </div>
              </div>
           
           
             </div>
             
        )
        }
    }
                                               