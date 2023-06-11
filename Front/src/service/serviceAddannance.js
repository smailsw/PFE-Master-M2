import axios from 'axios'
import {config} from '../service/config';


export const addannance = annance => {
  return axios
    .post(config+'annances/AddAnnance', {
      sujet: annance.sujet,
      desc: annance.desc,
      id_Filiere: annance.selectFiliere
      
      
    })
    .then(response => {
        console.log(annance)
        console.log(response)
      console.log('Annance add with sucsess !!!!!!!!!!!!!!!********!!!!!!!!!!!!!!')
    })
}
