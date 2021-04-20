import { AuthGuardService } from './../auth-guard.service';
import { CriarLoginCompoenent } from './criar-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rotas:Routes = [
    {
        path: 'cadastro',
        component: CriarLoginCompoenent,
        canActivate: [AuthGuardService]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ]
})
export class CriarLoginRoutingModule{}