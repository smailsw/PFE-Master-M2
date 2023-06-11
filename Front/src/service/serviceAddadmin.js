import axios from 'axios'
import {config} from '../service/config';

export const addadmin = admin => {
  console.log("admin----------------------------->",admin)
  return axios
    .post(config+'admins/AddAdmin', {
      first_name: admin.nom,
      last_name: admin.prenom,
      email: admin.email,
      adresse: admin.adresse,
      
    })
    .then(response => {
        console.log(admin)
        console.log(response)
      console.log('admin add with sucsess !!!!!!!!!!!!!!!!!!!********!!!!!!!!!!!!!!')
    })
}
