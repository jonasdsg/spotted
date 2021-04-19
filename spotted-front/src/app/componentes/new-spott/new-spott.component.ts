import { Component } from "@angular/core";

@Component({
    templateUrl: 'new-spott.component.html'
})
export class NewSpottComponent{
    public clicked:boolean = true;
    
    subMenu(){
        this.clicked = !this.clicked;
        console.log(this.clicked)
    }
}