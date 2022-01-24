interface _Tipohabitacion {
    id: number,
    nombretipo: string,
  }
export interface _Servicio{
  id: number,
  nombreservicio: string,
}
export interface _Habitacion{
id: number,
imagen1: string,
imagen2: string,
imagen3: string,
imagen4: string,
imagen5: string,
nombrehabitacion: string,
numerodebanios: number,
numerodecamas: number,
numerodepersonas: number,
numerohabitacion: number,
preciohabitacion: number,
tipohabitacion: _Tipohabitacion,
servicios: _Servicio[]
}
export interface _Prereserva{
  fechaInicio: string,
  fechaFin: string
}