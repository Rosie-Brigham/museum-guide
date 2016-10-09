import {
  createStore,
  applyMiddleware
} from 'redux';
import { combineForms } from 'react-redux-form';
import thunk from 'redux-thunk';

const initialUserState = {
  firstName: '',
  lastName: ''
};

const store = createStore(combineForms({
  user: initialUserState,
}), applyMiddleware(thunk));

export default store;