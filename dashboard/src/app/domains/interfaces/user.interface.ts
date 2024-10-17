export interface UserInterface {
    id: number; // Identifiant unique de l'utilisateur
    username: string; // Nom d'utilisateur
    password: string; // Mot de passe
    email: string; // Adresse e-mail de l'utilisateur
    role: 'admin' | 'parent' | 'staff'; // Rôle de l'utilisateur dans le système
    firstName: string; // Prénom de l'utilisateur
    lastName: string; // Nom de famille de l'utilisateur
    phone?: string; // Numéro de téléphone (optionnel)
    createdAt: Date; // Date de création de l'utilisateur
    updatedAt: Date; // Date de mise à jour des informations de l'utilisateur
}
