import {
  SET_FILE_LIST, TOGGLE_LOADING
} from './actionTypes';

const defaultState = {
  global: 'global'
};

export default (state = defaultState, action) => {
  let newState = {...state};
  switch(action.type) {
    case SET_FILE_LIST:
      
      break;
    case TOGGLE_LOADING:
      
      break;
  }

  return newState;
}