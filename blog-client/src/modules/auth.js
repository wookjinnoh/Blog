import { createAction, handleActions } from 'redux-actions';

const CHANGED_FIELD = 'auth/CHANGED_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changedField = createAction(
  CHANGED_FIELD,
  ({ form, key, value }) => ({
    form, // register, login
    key, // username, password, passwordConfirm
    value,
  }),
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

const inititalState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

const auth = handleActions(
  {
    [CHANGED_FIELD]: (state, { payload: { form, key, value } }) => ({
      ...state,
      [form]: {
        ...state[form],
        [key]: value,
      },
    }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: inititalState[form],
    }),
  },
  inititalState,
);

export default auth;
