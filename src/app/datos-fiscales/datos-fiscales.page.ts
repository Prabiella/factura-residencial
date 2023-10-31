import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-datos-fiscales',
  templateUrl: './datos-fiscales.page.html',
  styleUrls: ['./datos-fiscales.page.scss'],
})
export class DatosFiscalesPage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  cliente: any

  // jobForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // calle, numero int, numero exterior, colonia, municipio/alcaldia, 
  // CP(obligatorio), estado, pais(no se ve), 
  // 
  // });
  jobForm = new FormGroup({
    rfc: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("[A-Za-z0-9]{1,15}")]),
    razon: new FormControl('', [Validators.required, Validators.minLength(3)]),
    regimen: new FormControl('', [Validators.required, Validators.minLength(1)]),
    cfdi: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    calle: new FormControl('', [Validators.required]),
    numi: new FormControl('', [Validators.required,Validators.minLength(1), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    nume: new FormControl('', [Validators.required,Validators.minLength(1), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    colonia: new FormControl('', [Validators.required]),
    municipio: new FormControl('', [Validators.required]),
    cp: new FormControl('', [Validators.required,Validators.minLength(5), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    estado: new FormControl('', [Validators.required]),
    pais: new FormControl("Mexico")





  });

  get registerFormControl() {
    return this.jobForm.controls;
  }



  preview: string = '';

  ngOnInit() {
  }

  menu() {
    console.log(this.cliente);
    
    this.router.navigate(['/menu/' + this.cliente]);
  }

  async ionViewWillEnter() {
    this.cliente = localStorage.getItem('cliente')
    
    console.log(this.cliente);
  }

  save() {
    this.preview = JSON.stringify(this.jobForm.value);
    console.log(this.preview);


    if (this.jobForm.valid) {

      console.log("Válidos");

    }
    else {
      console.log("Hay datos inválidos en el formulario");
    }
  }



}
