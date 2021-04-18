import { DiscussComponent } from './discuss.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const rota:Routes = [
    {
        path: 'conversa/:id',
        component: DiscussComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(rota)]
})
export class DiscussRoutingModule{}