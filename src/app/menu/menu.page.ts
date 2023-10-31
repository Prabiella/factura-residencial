import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {


  constructor(private router: Router,private route: ActivatedRoute) { }

  suscriptor:any;
  cliente:any

  ngOnInit() {
  }

  ionViewWillEnter(){


    this.cliente = this.route.snapshot.paramMap.get('cliente');

  localStorage.setItem('cliente',this.cliente)
    console.log(this.cliente)
  }


  
  estado(){
    this.router.navigate(['/estado-cuenta']);
  }

  facturas(){
    this.router.navigate(['/facturas'+'/'+this.cliente]);
  }
  fiscal(){
    this.router.navigate(['/factura-fiscal']);
  }



  datos(){
    this.router.navigate(['/datos-fiscales']);
  }
}
