import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Role } from "../enums/user-role.enum";

export function authGuardFn(roles?: Role[]): CanActivateFn {
  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const AUTH_SERVICE: AuthService = inject(AuthService);
    const ROUTER: Router = inject(Router);
    if(AUTH_SERVICE.user()){
      if(!roles?.length || roles?.includes(AUTH_SERVICE.user()?.role!)){
        if(state.url == '/auth'){
          ROUTER.navigate(['/profile']);
        }
        return true;
      } else {
        ROUTER.navigate(['/profile']);
        return false;
      }
    } else {
      console.log("done")
      if(state.url == '/auth'){
        return true;
      } else {
        ROUTER.navigate(['/auth']);
        return false;
      }
    }
  };
}
