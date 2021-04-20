import { AuthGuardService } from './../auth-guard.service';
import { NewSpottComponent } from './new-spott.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const rota:Routes = [
    {
        path: 'novo',
        component: NewSpottComponent,
        canActivate:[AuthGuardService]
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(rota)
    ]
})
export class NewSpottRoutingModule{}