import { Component } from '@angular/core';
import { EmpleadosService } from './services/empleados.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmpleadosAppAngular';
  lista=null;
  empl:any = {
    id:null,
    nombre:null,
    apellido:null,
    cargo:null,
    sueldo:null
  }
  constructor(private empleadosServicio: EmpleadosService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.empleadosServicio.listar().subscribe(result => {
      this.lista = result;
    });
  }

  nuevo() {
    this.empleadosServicio.nuevo(this.empl).subscribe(result => {
      if (result=='ok') {
        this.limpiar();
        this.recuperarTodos();
      }
    });
  }

  eliminar(empleado) {
  	if(!confirm("Esta seguro que desea eliminar este empleado?"))
  		return;
    this.empleadosServicio.eliminar(empleado).subscribe(result => {
      if (result=='ok') {
        this.recuperarTodos();
      }
    });
  }

  actualizar() {
    this.empleadosServicio.actualizar(this.empl).subscribe(result => {
      //if (result.nModified=='1') {
        this.limpiar();
        this.recuperarTodos();
      //}
    });    
  }
  
  mostrar(id:any) {
    this.empleadosServicio.mostrar(id).subscribe(result => {
      this.empl = result;
    });
  }

  hayRegistros() {
    return true;
  }

  limpiar(){
    this.empl = { 
      id:null, 
      nombre:null, 
      apellido:null,
      cargo:null,
      sueldo:null
    };
  }
}

