import { FETCH_POSTS }  from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POSTS:
      const postsList = action.payload.data;
      const postsListAsObj = _.mapKeys(postsList, 'id');
      return postsListAsObj;
    break;
    default:
      return state;
  }
}