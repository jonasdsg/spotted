import { NaoEncontradoModule } from './nao-encontrado/nao-encontrado.module';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { CriarLoginModule } from './criar-login/criar-login.module';
import { NgModule } from "@angular/core";

@NgModule({

    exports:[
        CriarLoginModule,
        RouterModule,
        LoginModule,
        NaoEncontradoModule
    ]
})
export class ComponentesModule{}