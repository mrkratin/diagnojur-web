import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { TokenService } from '../../shared/services';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild {
  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(): boolean {
    if (this.isAdmin()) {
      return true;
    }
    this.router.navigate(['/client/list-solicitations']);
    return false;
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }

  private isAdmin() {
    return this.tokenService.isAdmin();
  }
}
