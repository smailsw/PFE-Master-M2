import axios from 'axios'
import {config} from '../service/config';

export const addprof = prof => {
  return axios
    .post(config+'profs/AddProf', {
      first_name: prof.nom,
      last_name: prof.prenom,
      email: prof.email,
      adresse: prof.adresse,
      sexe: prof.sexe,
      cin: prof.cin,
      telephone: prof.telephone
    })
    .then(response => {
      console.log('prof add with sucsess !!!!!!!!!!!!!!!!!!!********!!!!!!!!!!!!!!')
    })
}
