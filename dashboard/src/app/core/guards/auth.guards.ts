import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {}
    
    canActivate() {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
    }
}
}