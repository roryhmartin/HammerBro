import { Component, OnInit } from '@angular/core';
import { DarkAngelUnit } from '../../../interfaces/dark-angel-unit';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-dark-angels',
  templateUrl: './dark-angels.component.html',
  styleUrl: './dark-angels.component.css'
})
export class DarkAngelsComponent implements OnInit {
  darkAngelsUnits: DarkAngelUnit[] = [];

  constructor(private dataService: DataService ) {}

  ngOnInit(): void {
      this.dataService.getDarkAngelsUnits().subscribe(units => {
        this.darkAngelsUnits = units;
      })
  }
}
