import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { CriarLoginModule } from './criar-login/criar-login.module';
import { NgModule } from "@angular/core";

@NgModule({

    exports:[
        CriarLoginModule,
        RouterModule,
        LoginModule
    ]
})
export class ComponentesModule{}