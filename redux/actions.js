export const AGREGAR_USUARIO = 'AGREGAR_USUARIO';
export const URL_IMAGES = 'URL_IMAGES';
export const SET_JWT = 'SET_JWT';
export const SET_DATA_USER = 'SET_DATA_USER';
export const AGREGAR_FAVORITOS = 'AGREGAR_FAVORITOS';
export const ELIMINAR_FAVORITOS = 'ELIMINAR_FAVORITOS';
export const RECUPERAR_FAVORITOS = 'RECUPERAR_FAVORITOS';
export const agregarUsuario = usuario => {
  return {type: AGREGAR_USUARIO, payload: usuario};
};
export const setUrlImages = url => {
  return {type: URL_IMAGES, payload: url};
};
export const setJwt = jwt => {
  return {type: SET_JWT, payload: jwt};
};
export const setDataUser = data => {
  return {type: SET_DATA_USER, payload: data};
};

export const recuperarFavoritos = data => {
  return {type: RECUPERAR_FAVORITOS, payload: data};
};
export const agregarFavoritos = data => {
  return {type: AGREGAR_FAVORITOS, payload: data};
};
export const eliminarFavoritos = data => {
  return {type: ELIMINAR_FAVORITOS, payload: data};
};
