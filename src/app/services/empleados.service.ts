import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  url='http://localhost:3000/empleados/'; 
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get(`${this.url}listar`);
  }
  nuevo(empleado) {
    return this.http.post(`${this.url}`, empleado);    
  }
  eliminar(id) {
    return this.http.delete(`${this.url}${id}`);
  }
  mostrar(id) {
    return this.http.get(`${this.url}mostrar/${id}`);
  }
  actualizar(empleado) {
    return this.http.put(`${this.url}`, empleado);    
  }
}

