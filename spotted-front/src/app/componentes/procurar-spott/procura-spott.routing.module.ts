import { AuthGuardService } from './../auth-guard.service';
import { ProcuraSpottComponent } from './procura-spott.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const rota:Routes = [
    {
        path: 'procurar',
        component: ProcuraSpottComponent,
        canActivate: [AuthGuardService]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(rota)]
})
export class ProcurarSpottRoutingModule{}