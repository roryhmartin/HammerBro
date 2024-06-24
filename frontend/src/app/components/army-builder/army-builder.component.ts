import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-army-builder',
  templateUrl: './army-builder.component.html',
  styleUrl: './army-builder.component.css'
})
export class ArmyBuilderComponent {

constructor(private router: Router) { }

isCurrentRoute(route:string): boolean {
  return this.router.url === route;
}

}
