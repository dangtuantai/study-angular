import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class AuthPermissionGuard implements CanActivate {

    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        // this.permissionStore.hascheckisSupperWithPermission(route);
        return true;
    }

}
