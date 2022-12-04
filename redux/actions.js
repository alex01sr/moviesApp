export const AGREGAR_USUARIO = 'AGREGAR_USUARIO';

export const agregarUsuario = usuario => {
  return {type: AGREGAR_USUARIO, payload: usuario};
};
