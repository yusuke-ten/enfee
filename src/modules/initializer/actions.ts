import { CreatorsToActions } from 'src/utils';

/* action types */
export const actionTypes = {
  CHECKED_LOCALSTORAGE: 'INITIALIZER/CHECKED_LOCALSTORAGE',
  INITIALIZE_APP: 'INITIALIZER/INITIALIZE_APP',
  APP_INITIALIZED: 'INITIALIZER/APP_INITIALIZED',
  INITIALIZE_REVIEW_FORM: 'INITIALIZER/INITIALIZE_REVIEW_FORM',
  REVIEW_FORM_INITIALIZED: 'INITIALIZER/REVIEW_FORM_INITIALIZED',
} as const;

/* action creators */
export const initialize = {
  app: () => ({
    type: actionTypes.INITIALIZE_APP,
  }),
  reviewForm: () => ({
    type: actionTypes.INITIALIZE_REVIEW_FORM,
  }),
};

export const initialized = {
  localstorge: () => ({
    type: actionTypes.CHECKED_LOCALSTORAGE,
  }),
  app: () => ({
    type: actionTypes.APP_INITIALIZED,
  }),
  reviewForm: () => ({
    type: actionTypes.REVIEW_FORM_INITIALIZED,
  }),
};

export type InitializerAction =
  | CreatorsToActions<typeof initialize>
  | CreatorsToActions<typeof initialized>;
