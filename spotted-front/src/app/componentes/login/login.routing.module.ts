import { AuthGuardService } from './../auth-guard.service';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const rota:Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuardService]
    }
];
@NgModule({
    imports:[
        RouterModule.forRoot(rota)
    ]
})
export class LoginRoutingModule {}