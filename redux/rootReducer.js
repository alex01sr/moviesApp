import {
  AGREGAR_FAVORITOS,
  AGREGAR_USUARIO,
  ELIMINAR_FAVORITOS,
  RECUPERAR_FAVORITOS,
  SET_DATA_USER,
  SET_FILTER,
  SET_JWT,
  URL_IMAGES,
} from './actions';

const initialState = {
  usuarios: {},
  urlImages: 'https://image.tmdb.org/t/p/',
  perfil: {},
  favoritos: [],
  jwt: '',
  filterSelect: {name: 'Todos', id: ''},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_USUARIO: {
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
    case AGREGAR_FAVORITOS: {
      return {
        ...state,
        favoritos: [...state.favoritos, action.payload],
      };
    }
    case ELIMINAR_FAVORITOS: {
      let aux = state.favoritos?.filter(e => e.id !== action.payload.id);

      return {
        ...state,
        favoritos: aux,
      };
    }
    case RECUPERAR_FAVORITOS: {
      return {
        ...state,
        favoritos: action.payload,
      };
    }
    case SET_FILTER: {
      return {
        ...state,
        filterSelect: action.payload,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
