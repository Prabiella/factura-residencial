import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetFacturaService {


  constructor(private http:HttpClient) { }

  GetFactura(params:any):Promise<any> {
  return new Promise((resolve,reject) => {
    this.http.post('https://xbmhg033vk.execute-api.us-east-1.amazonaws.com/stage/get-facturas',params).subscribe({
      next: resp =>{
        // console.log(resp);
        resolve(resp);

      },
      error: err =>{
        // console.log(err.error)
        reject(err)
      }
    });
  
  })}


}
