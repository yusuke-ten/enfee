import { RootState } from 'modules/reducer';

export const selectToken = (state: RootState) => state.auth.token;

export const selectAuth = (state: RootState) => state.auth;
