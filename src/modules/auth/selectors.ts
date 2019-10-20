import { RootState } from 'src/modules';

export const selectToken = (state: RootState) => state.auth.token;

export const selectAuth = (state: RootState) => state.auth;
