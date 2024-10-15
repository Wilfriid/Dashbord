import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.inscriptionForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      profession: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      lien: ['', [Validators.required]]
    });
  }

  // Méthode pour soumettre le formulaire
  onSubmit() {
    if (this.inscriptionForm.valid) {
      const formData = this.inscriptionForm.value;
      console.log('Données du formulaire:', formData);
      // Envoyer les données au serveur ou effectuer d'autres actions
    }
  }
}
