import { combineReducers } from 'redux';

import auth from './auth';
import listProperties from './list-properties';
import profileProperties from './profile-properties';
import userLists from './user-lists';
import reminders from './reminders';
import currentList from './current-list';

const rootReducer = combineReducers({
  auth,
  listProperties,
  profileProperties,
  userLists,
  reminders,
  currentList,
});

export default rootReducer;
