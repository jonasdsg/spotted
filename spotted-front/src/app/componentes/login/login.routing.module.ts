import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const rota:Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];
@NgModule({
    imports:[
        RouterModule.forRoot(rota)
    ]
})
export class LoginRoutingModule {}