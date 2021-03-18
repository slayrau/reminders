import { combineReducers } from 'redux';

import auth from './auth';
import listProperties from './list-properties';

const rootReducer = combineReducers({
  auth,
  listProperties,
});

export default rootReducer;
