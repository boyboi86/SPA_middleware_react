import { FETCH_USERS } from '../actions/types';
import axios from 'axios';

/* Jsonplaceholder.com API*/

export function fetchUsers(){
  const request = axios.get('https://jsonplaceholder.typicode.com/users')
  return {
    type: FETCH_USERS,
    payload: request
  }
}
