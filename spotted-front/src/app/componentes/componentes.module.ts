import { RouterModule } from '@angular/router';
import { CriarLoginModule } from './criar-login/criar-login.module';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        RouterModule,
        CriarLoginModule,
    ],
    exports:[
        CriarLoginModule,
        RouterModule
    ]
})
export class ComponentesModule{}