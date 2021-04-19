import { SpottModule } from './spott/spott.module';
import { ProcurarSpottModule } from './procurar-spott/procurar-spott.module';
import { NewSpottModule } from './new-spott/new-spot.module';
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
        NewSpottModule,
        ProcurarSpottModule,
        SpottModule
        
        //
        //Sempre manter esse componente por ultimo, caso contrário oque estiver 
        // abaixo dele nunca será encontrado por rotas.
        ,NaoEncontradoModule,
    ]
})
export class ComponentesModule{}