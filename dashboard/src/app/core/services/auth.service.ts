// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api'; // URL de votre API Django

  constructor(private http: HttpClient) {}

  // Inscription
  register(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register/`, formData);
  }

  // Authentification
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/token/`, { username, password });
  }

  // Renouveler le token
  refreshToken(refreshToken: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/token/refresh/`, { refresh: refreshToken });
  }

  // Vérifier si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    return !!localStorage.getItem('access'); // Vérifiez si le token est présent
  }
}
