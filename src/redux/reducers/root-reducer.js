import { combineReducers } from 'redux';

import auth from './auth';
import listProperties from './list-properties';
import userLists from './user-lists';

const rootReducer = combineReducers({
  auth,
  listProperties,
  userLists,
});

export default rootReducer;
