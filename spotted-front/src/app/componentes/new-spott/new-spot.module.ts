import { NewSpottRoutingModule } from './new-spot.routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        NewSpottRoutingModule
    ]
})
export class NewSpottModule{}