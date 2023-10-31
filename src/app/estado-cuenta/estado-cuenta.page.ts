import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.page.html',
  styleUrls: ['./estado-cuenta.page.scss'],
})
export class EstadoCuentaPage implements OnInit {


  @ViewChild('content') modal: any;
 

  constructor() { }

  // fecha:any;
  //  fecha = new Date();
  fecha: String = new Date().toISOString();

  ngOnInit() {
     console.log("fe", this.fecha);
    
  }


  mes(fecha:any){
    console.log("mes",fecha)

    this.fecha==undefined?fecha='08-23':fecha

    
  }


  cerrar(){
this.modal.dismiss()
console.log(this.fecha)
  }

}
