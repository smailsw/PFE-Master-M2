import axios from 'axios'
import {config} from '../service/config';

export const addfiliere = filiere => {
  return axios
    .post(config+'filieres/AddFiliere', {
      name: filiere.nom_filiere,
      abreviation: filiere.abreviation,
      
      
    })
    .then(response => {
        console.log(filiere)
        console.log(response)
      console.log('prof add with sucsess !!!!!!!!!!!!!!!!!!!********!!!!!!!!!!!!!!')
    })
}
