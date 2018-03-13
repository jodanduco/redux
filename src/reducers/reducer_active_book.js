/**
 * Active Book reducer
 * @param {Obj} state Is not application state, only the state
 * this reducer is reponsible for.
 * @param {Obj} action 
 */
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}