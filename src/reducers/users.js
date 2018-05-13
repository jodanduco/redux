import { FETCH_USERS } from '../actions/types';

export default (state = [], action) =>  {
  switch (action.type) {
    case FETCH_USERS:
      // Takes existing state and concatenates new list of users
      return [...state, ...action.payload];
  }
  return state;
};
