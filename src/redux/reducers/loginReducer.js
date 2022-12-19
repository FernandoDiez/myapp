import { types } from '../types'

const initialValues = {
  isLoggedIn: false,
  error: '',
  camillero: '',
  camilleroId: '',
  conductor: '',
  conductorId: '',
  servicio: '',
  servicioId: '',
  vehiculoId: '',
  matricula: '',
  dispositivo: '',
  cuadranteId: '',
  mensajeAvisos: '',
  esUrgencia: false,
  mostrarColectivo: false
}

export const loginReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        error: action.payload.error,
        camillero: action.payload.camillero,
        camilleroId: action.payload.camilleriId,
        conductor: action.payload.conductor,
        conductorId: action.payload.conductorId,
        servicio: action.payload.servicio,
        servicioId: action.payload.servicioId,
        vehiculoId: action.payload.vehiculoId,
        matricula: action.payload.matricula,
        dispositivo: action.payload.dispositivo,
        cuadranteId: action.payload.cuadranteId,
        mesajeAvisos: action.payload.mensajeAvisos,
        esUrgencia: action.payload.esUrgencia,
        mostrarColectivo: action.payload.mostrarColectivo
      }
    default:
      return state
  }
}