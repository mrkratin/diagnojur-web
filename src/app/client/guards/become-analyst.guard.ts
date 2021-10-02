import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { TokenService } from '../../shared/services';

@Injectable({
  providedIn: 'root'
})
export class BecomeAnalystGuard implements CanActivate, CanActivateChild {
  constructor(private tokenService: TokenService, private location: Location, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (!this.isAnalyst()) {
      return true;
    }
    // this.location.back();
    this.router.navigate(['/client/list-solicitations']);
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }

  private isAnalyst(): boolean {
    return this.tokenService.isAnalyst();
  }
}
