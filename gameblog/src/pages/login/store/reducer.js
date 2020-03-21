
import { fromJS } from 'immutable';
import * as constants from './constants';

const defalutState = fromJS({
  login: false
});




export default (state = defalutState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', action.value);

    case constants.CHANGE_LOGOUT:
      return state.set('login', action.value);
    default:
      return state;
  }
}