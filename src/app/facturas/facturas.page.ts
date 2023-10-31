import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetFacturaService } from '../services/get-factura.service';
import { AlertController } from '@ionic/angular';
import { EncodeFacService } from '../services/encode-fac.service';
@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.page.html',
  styleUrls: ['./facturas.page.scss'],
})
export class FacturasPage implements OnInit {



  @ViewChild('content') modal: any;

  
 

  constructor(private router: Router,
    public alertCtrl: AlertController,private encode: EncodeFacService,private route: ActivatedRoute, private getFactura: GetFacturaService) { }

  // fecha:any;
  //  fecha = new Date();
  fecha: String = new Date().toISOString();
  pdf=true;
  xml=true;
facturas:any;
consulta=false;
cliente:any;
mess:any
fechastring:any;
fecha_min:any;
estatus:any;
loading=false;
pagina="facturas"



  async ionViewWillEnter() {
   this.cliente = this.route.snapshot.paramMap.get('cliente');
  // console.log(this.cliente)
  // console.log(this.fecha)
  // console.log(this.fecha_min);
  
  
  this.fechastring=String(this.fecha)
  
  
  let year=  this.fechastring.substr(0, 4);
  
  
  this.fecha_min= year-1
  // console.log(this.fecha_min)



  


  }

  ngOnInit() {
    //  console.log("fe", this.fecha);
    
  }


  async mes(fecha:any){

    this.loading=true;
   
this.fechastring=String(this.fecha)


let mes=  this.fechastring.substr(4,4);
mes=mes.replace("-", "");
mes=mes.replace("-", "");
// console.log(mes)


let year=  this.fechastring.substr(0, 4);
// console.log(year)



    


    let params = {
      cliente: this.cliente,
      mes: mes,
      anio: year
    }

    await this.getFactura.GetFactura(params).then(async respuesta => {
      // console.log(respuesta);
 
      this.facturas=respuesta.message



      this.loading=false;


// console.log( respuesta.statusCode)
if (respuesta.statusCode != "200") {
  this.consulta=false;
  
  const alert = await this.alertCtrl.create({
    header: 'Aviso',
    subHeader: 'No existe el documento, comunicate al teléfono: XXXXX',
    // message: 'This is an alert!',
    //Revisar con Paco
    buttons: ['OK'],

  

  });

  await alert.present();


}
else{
  this.consulta=true
}

       
   });

    
  }


  cerrar(){
this.modal.dismiss()
// console.log(this.fecha)
  }




  async cons(link:any, periodo:any){
    console.log("consulta pdf", link,periodo);
    this.loading=true
    let params = {
      link: link,
      cliente:  this.cliente,
      periodo: periodo
    }
    
    await this.encode.Encode(params).then(async respuesta => {
      console.log(respuesta);
      this.loading=false

      if(respuesta.statusCode==200){
        
        window.open(respuesta.message, "_blank");

        const alert = await this.alertCtrl.create({
          header: 'Aviso',
          subHeader: 'Archivo descargado con éxito',
          // message: 'This is an alert!',
          buttons: ['OK'],
      
        
      
        });
        await alert.present();
  

        
      }
      else{

        const alert = await this.alertCtrl.create({
          header: 'Aviso',
          subHeader: respuesta.message,
          // message: 'This is an alert!',
          buttons: ['OK'],
      
        
      
        });
        await alert.present();
  

      }
    }


    )
  }

  menu(){
    this.router.navigate(['/menu/'+this.cliente]);
  }


}
