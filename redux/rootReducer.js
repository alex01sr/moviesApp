import {AGREGAR_USUARIO, SET_DATA_USER, SET_JWT, URL_IMAGES} from './actions';

const initialState = {
  usuarios: {},
  urlImages: '',
  perfil: {},
  jwt: '',
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
    case SET_JWT: {
      return {
        ...state,
        jwt: action.payload,
      };
    }
    case SET_DATA_USER: {
      return {
        ...state,
        perfil: action.payload,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
