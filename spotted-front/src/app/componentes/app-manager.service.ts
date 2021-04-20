import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AppManagerService {
    constructor(private router:Router){}
    
    get getRota():string{
        return this.router.getCurrentNavigation().extractedUrl.toString();
    }

    get isLogged():boolean{
        return true;
    }

    mainRedirect():Observable<boolean>{
        const rotaLogin = true;

        if(rotaLogin && this.isLogged){
            this.router.navigate(['/procurar']);
        }
        
        return of(rotaLogin);
    }
}