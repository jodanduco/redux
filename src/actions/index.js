/**
 * ActionCreator
 * @param {*} book Book selected
 * @returns {Obj} Action, it's an object with type property
 */
export function selectBook (book) {  
  const action = {
    type: 'BOOK_SELECTED',
    payload: book, // more info of the action
  };
  return action;
}

