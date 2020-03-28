import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  autorizar: boolean;

  constructor(private http: HttpClient) { }

  

  getAllUsers(){

    const url_api = "https://jsonplaceholder.typicode.com/users";

    return this.http.get(url_api);
  }
 

}
