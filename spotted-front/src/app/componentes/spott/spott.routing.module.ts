import { AuthGuardService } from './../auth-guard.service';
import { SpottComponent } from './spott.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const rota:Routes = [
    {
        path: 'spott/:id',
        component: SpottComponent,
        canActivate: [AuthGuardService]
    }
];
@NgModule({
    imports:[
        RouterModule.forRoot(rota)
    ]
})
export class SpottRoutingModule {}