import { FETCH_USERS } from '../actions/index';

export function fetchUsers(){
  return {
    type: FETCH_USERS,
    payload:[
      { name: 'Alex' },
      { name: 'Sammy' },
      { name: 'Dick' }
    ]
  }
}
