import axios from 'axios'
import {config} from '../service/config';

export const addseance = seance => {
   // console.log('"config.url',config)
    
  return axios
    .post(config+'seances/AddSeance', {
      date_Seance: seance.date_Seance,
      heurDebut: seance.heurDebut,
      heurFin: seance.heurFin,
      type_Seance: seance.type_Seance,
      id_Module: seance.selectModule,
      id_Filiere: seance.selectFiliere 

      
      
    })
    .then(response => {
        console.log(seance)
        console.log(response)
      console.log('seance add with sucsess !!!!!!!!!!!!!!!!!!!********!!!!!!!!!!!!!!')
    })
    .catch(err => {
        console.log('err',err) ;
    })
}
