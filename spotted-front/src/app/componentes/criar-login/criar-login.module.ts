import { RouterModule } from '@angular/router';
import { CriarLoginRoutingModule } from './criar-login.routing.module';
import { CriarLoginCompoenent } from './criar-login.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CriarLoginCompoenent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        CriarLoginRoutingModule,
        RouterModule
    ],
    exports:[
        CriarLoginRoutingModule
    ]


})
export class CriarLoginModule{}