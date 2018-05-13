import { FETCH_USERS } from './types';

export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: [
      { name: 'Jane'},
      { name: 'Josue'},
      { name: 'Joss'},
      { name: 'Jim'},
    ],
  };
}
