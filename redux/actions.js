export const AGREGAR_USUARIO = 'AGREGAR_USUARIO';
export const URL_IMAGES = 'URL_IMAGES';

export const agregarUsuario = usuario => {
  return {type: AGREGAR_USUARIO, payload: usuario};
};
export const setUrlImages = url => {
  return {type: URL_IMAGES, payload: url};
};
