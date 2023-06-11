import axios from 'axios'
import {config} from '../service/config';
import history from '../history';

export const login = user => {
  return axios
    .post(config+'users/login', {
      
      email: user.email,
      password: user.password
      
    })
    
    .then(response => {
        console.log('////////////////////////', response.data['user'].id)
      localStorage.setItem('usertoken', response.data['token'])
      localStorage.setItem('user', response.data['user'].id);

      // console.log(response.data)
      
      console.log("hello "+ user.email)
      // history.push('/Home')
      if(response.data.user.role === 'Prof'){
         history.push('/seances',response.data.user.role)
               
      }else if(response.data.user.role === 'Etudiant')
      {
        history.push('/etudianrCompte',response.data.user.role)
      }else if(response.data.user.role === 'Admin')
      {
        history.push('/acueilAdmin',response.data.user.role)
      }
      
      
      return response.data.user
    })
    .catch(err => {
      console.log(err)
    })
}