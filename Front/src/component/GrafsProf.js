import React, { Component } from 'react'

import Axios from 'axios';
import ChartAbsenceModule from '../charts/ChartAbsenceModule'

import history from '../history';

export default class GrafsProf extends Component {
    
    constructor(props) {
        super(props);
        
    }

    render() {

      

        return (
          <div className="db">
           <ChartAbsenceModule/>
             </div>
             
        )
        }
    }
                                               