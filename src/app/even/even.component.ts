import { Component,Input } from '@angular/core';

@Component({
    templateUrl: "./even.component.html",
    selector: "app-even"
})
export class EvenComponent {
    @Input () num: string

}