import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST }  from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POSTS:
      const postsList = action.payload.data;
      const postsListAsObj = _.mapKeys(postsList, 'id');
      return postsListAsObj;
    break;
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;

      // Identical to: 
      const postId = action.payload.data.id; 
      const post = action.payload.data;
      return { ...state, //Copy state obj
        [postId]: post,
      };
    break;
    case DELETE_POST: 
      const id = action.payload;
      return _.omit(state, id);
    break;
    default:
      return state;
  }
}