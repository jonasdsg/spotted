import { NaoEncontradoModule } from './nao-encontrado/nao-encontrado.module';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { CriarLoginModule } from './criar-login/criar-login.module';
import { NgModule } from "@angular/core";
import { DiscussModule } from './discuss/discuss.module';

@NgModule({

    exports:[
        CriarLoginModule,
        RouterModule,
        LoginModule,
        DiscussModule,
        NaoEncontradoModule,
    ]
})
export class ComponentesModule{}