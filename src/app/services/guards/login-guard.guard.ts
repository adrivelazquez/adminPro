import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  
  
  constructor(public _usuarioService: UsuarioService, public router: Router){

  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {



      if ( this._usuarioService.estaLogueado()) {
        console.log('paso el guard');
        return true;
      } else {
        console.log('bloqueado por el guard');
        this.router.navigate(['/login']);
        return false;
      }


    return true;
  }
}
