import { SpottRoutingModule } from './spott.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        SpottRoutingModule
    ]
})
export class SpottModule{}