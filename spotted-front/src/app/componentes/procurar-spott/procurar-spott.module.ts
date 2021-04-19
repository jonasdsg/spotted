import { ProcurarSpottRoutingModule } from './procura-spott.routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    exports:[
        ProcurarSpottRoutingModule
    ]
})
export class ProcurarSpottModule{}