import {AGREGAR_USUARIO, URL_IMAGES} from './actions';

const initialState = {
  usuarios: {},
  urlImages: '',
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
    case URL_IMAGES: {
      return {
        ...state,
        urlImages: action.payload,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
