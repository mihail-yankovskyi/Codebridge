import { createAction, props } from '@ngrx/store';

export const loadArticles = createAction('[App] Load Articles', props<{ request: string }>());
export const loadArticlesSuccess = createAction('[App] Load Articles Success', props<{ data: any[] }>());
export const loadArticlesFailure = createAction('[App] Load Articles Failure', props<{ error: string }>());

export const clearError = createAction('[App] Clear Error');
