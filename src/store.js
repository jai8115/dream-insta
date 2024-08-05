import { configureStore } from '@reduxjs/toolkit';
import { positions, transitions } from 'react-alert';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { matchReducer } from './reducers/matchReducer';
import { userReducer } from './reducers/userReducer';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

const reducer = combineReducers({
  user: userReducer,
  match: matchReducer,
});

const middleware = [thunk];

const store = configureStore({
  reducer,
  middleware,
});

export default store;
