import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from 'app/domains/interfaces/user.interface';
import { environment } from 'environments/environment.prod';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  get(endPoint: string) {
    return this.httpClient.get(`${this.baseUrl}/${endPoint}`);
  }

  getById(endPoint: string, id: number) {
    return this.httpClient.get(`${this.baseUrl}/${endPoint}/${id}`);
  }

  create(endPoint: string, data: any) {
    this.httpClient.post(`${this.baseUrl}/${endPoint}`, data).pipe();
  }

  update(endPoint: string, data: any) {
    this.httpClient.put(`${this.baseUrl}/${endPoint}`, data).pipe();
  }

  delete(endPoint: string, id: number) {
    this.httpClient.delete(`${this.baseUrl}/${endPoint}/${id}`).pipe();
  }

  private handleError(error: any) {
    let errorMessage: string = 'Oups ! quelque chose a mal tourné.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      switch (error.status) {
        case 400: errorMessage = error.error.message;
        break;
        case 401: errorMessage = error.error.message;
        break;
        case 402: errorMessage = error.error.message;
        break;
        case 403: errorMessage = error.error.message;
        break;
        case 404: errorMessage = error.error.message;
        break;
        case 500: errorMessage = error.error.message;
        break;
        default: errorMessage = error.error.message;
        break;
      }
    }
    return throwError((): Error => new Error(errorMessage))
  }


  
}

