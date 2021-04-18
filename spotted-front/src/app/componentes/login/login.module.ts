import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login.routing.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[
        RouterModule,
        LoginRoutingModule
    ],
    exports:[
        LoginRoutingModule
    ]
})
export class LoginModule{}