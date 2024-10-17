// src/app/auth/inscription/inscription.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.inscriptionForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      const formData = this.inscriptionForm.value;
      this.authService.register(formData).subscribe(
        response => {
          console.log('Inscription réussie!', response);
          // Gérer le succès ici, par exemple rediriger vers la page de connexion
        },
        error => {
          console.error('Erreur lors de l\'inscription', error);
          // Gérer les erreurs ici
        }
      );
    }
  }
}
