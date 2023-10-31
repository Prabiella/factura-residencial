import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncodeFacService {

  constructor(private http:HttpClient) { }

  Encode(params:any):Promise<any> {
  return new Promise((resolve,reject) => {
    this.http.post('https://xbmhg033vk.execute-api.us-east-1.amazonaws.com/stage/get-link',params).subscribe({
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
