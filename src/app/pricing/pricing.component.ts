import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {

  // Fonction qui s'exécute lors de la soumission du formulaire
  onSubmit(pricingForm: any) {
    if (pricingForm.valid) {
      console.log('Formulaire soumis avec succès :', pricingForm.value);
      alert('Votre souscription a été enregistrée avec succès.');
    } else {
      console.log('Formulaire invalide');
    }
  }
}

