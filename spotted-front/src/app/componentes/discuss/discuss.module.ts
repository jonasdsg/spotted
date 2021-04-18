import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DiscussRoutingModule } from './discuss.routing.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        DiscussRoutingModule
    ],
    exports:[
        DiscussRoutingModule
    ]
})
export class DiscussModule{}