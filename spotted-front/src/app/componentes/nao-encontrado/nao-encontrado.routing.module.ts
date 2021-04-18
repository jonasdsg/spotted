import { NaoEncontradoComponent } from './nao-encontrado.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
const rota:Routes = [
    {
        path: '**',
        component: NaoEncontradoComponent
    }
]
@NgModule({
    imports:[ RouterModule.forRoot(rota)]
})
export class NaoEncontradoRoutingModule{}