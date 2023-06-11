import axios from 'axios'
import {config} from './config'

export const addetudiant = etudiant => {
  return axios
    .post(config+'etudiants/AddEtudiant', {
      first_name: etudiant.nom,
      last_name: etudiant.prenom,
      email: etudiant.email,
      adresse: etudiant.adresse,
      sexe: etudiant.sexe,
      cin: etudiant.cin,
      cne: etudiant.cne,
      date_naissance: etudiant.date_naissance,
      telephone: etudiant.telephone,
      id_Filiere: etudiant.selectFiliere
    })
    .then(response => {
      console.log('etudiant add with sucsess !!!!!!!!!!!!!!!!!!!********!!!!!!!!!!!!!!')
    })
}
