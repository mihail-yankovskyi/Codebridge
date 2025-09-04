import { createReducer, on } from '@ngrx/store';
import { initialAppState } from '../models/app.models';
import * as AppActions from '../actions/app.actions';

export const appReducer = createReducer(
  initialAppState,
  on(AppActions.loadArticles, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(AppActions.loadArticlesSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data,
    error: null
  })),
  on(AppActions.loadArticlesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(AppActions.clearError, (state) => ({
    ...state,
    error: null
  }))
);
