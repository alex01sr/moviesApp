import {AGREGAR_USUARIO} from './actions';

const initialState = {
  usuarios: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_USUARIO: {
      console.log('base');
      return {
        ...state,
        usuarios: {...state.usuarios, [action.payload.email]: action.payload},
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
