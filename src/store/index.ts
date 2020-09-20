import {
  Action,
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from '@reduxjs/toolkit';
import thunk, { ThunkAction } from 'redux-thunk';
import { SearchRepositoriesState } from 'utils/types';
import { searchRepositoriesSlice } from './searchRepositories';

const middlewares = [thunk];
const enhancers = [applyMiddleware(...middlewares)];

const rootReducer = combineReducers({
  searchRepositories: searchRepositoriesSlice.reducer,
});

const store = createStore(rootReducer, {}, compose(...enhancers));

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<
  void,
  SearchRepositoriesState,
  null,
  Action<string>
>;
export type Store = typeof store;

export default store;
