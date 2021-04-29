import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AppManagerService {
    constructor(private router:Router){}
    
    get getRota():Observable<string>{
        return of(this.router.getCurrentNavigation().extractedUrl.toString());
    }

    get isLogged():Observable<boolean>{
        return of(true);
    }

    get verify():Observable<boolean>{
        let value:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
        
        this.isLogged.subscribe(isLogged =>{
            //Comentário só pra avisar que até eu fiquei confuso com essa lógica, e olha que foi eu que fiz haahaha.
            this.getRota.subscribe(rota =>{
                const rotaAtual = rota.replace('/','');
                const loginPath = ['login'].includes(rotaAtual);
                if(loginPath && isLogged){
                    this.router.navigate(['/procurar']);
                }
                if(!loginPath && !isLogged){
                    !'cadastro'.includes(rotaAtual) && this.router.navigate(['/login']);
                }
                
                value = new BehaviorSubject<boolean>((loginPath && !isLogged)||(!loginPath && isLogged)||'cadastro'.includes(rotaAtual));
                
            })
        })
        return value;
    }
}