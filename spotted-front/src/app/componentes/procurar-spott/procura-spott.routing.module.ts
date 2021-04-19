import { ProcuraSpottComponent } from './procura-spott.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const rota:Routes = [
    {
        path: 'procurar',
        component: ProcuraSpottComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(rota)]
})
export class ProcurarSpottRoutingModule{}