import axios from 'axios'
import {config} from '../service/config';


export const addmodule = module => {
  return axios
    .post(config+'modules/Addmodule', {
      name: module.nom_module,
      nbrHeur: module.nbrHeur,
      id_Prof:module.selectProf,
      id_Filiere: module.selectFiliere
      
      
    })
    .then(response => {
        console.log(module)
        console.log(response)
      console.log('Module add with sucsess !!!!!!!!!!!!!!!!!!!********!!!!!!!!!!!!!!')
    })
}
