import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { localizeReducer as localize } from 'react-localize-redux';

import authentication from './authentication';
import userReducer from './home/reducer';

const rootReducer = combineReducers({
  form: FormReducer,
  localize,
  authentication,
  users: userReducer,
});

export default rootReducer;
