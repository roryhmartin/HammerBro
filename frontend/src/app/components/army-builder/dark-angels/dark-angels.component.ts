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

  darkAngelsCharacters :DarkAngelUnit[] = [];
  darkAngelsBattleLine: DarkAngelUnit[] = [];
  darkAngelsDedicatedTransport: DarkAngelUnit[] = [];
  darkAngelsOtherDataSheets: DarkAngelUnit[] = [];
  darkAngelsAlliedUnits: DarkAngelUnit[] = [];

  constructor(private dataService: DataService ) {}

  ngOnInit(): void {
      this.dataService.getDarkAngelsUnits().subscribe(units => {
       for(let i = 0; i < units.length; i++) {
         console.log(units[i]);
         if (units[i].keywords.includes("CHARACTER")) {
           this.darkAngelsCharacters.push(units[i]);
         }
         else if (units[i].keywords.includes("BATTLELINE")) {
           this.darkAngelsBattleLine.push(units[i]);
         }
         else if(units[i].keywords.includes("DEDICATED TRANSPORT")) {
           this.darkAngelsDedicatedTransport.push(units[i]);
         }
         else if(units[i].keywords.includes("ALLIED UNITS")) {
           this.darkAngelsAlliedUnits.push(units[i]);
         }
         else {
          this.darkAngelsOtherDataSheets.push(units[i]);
         }
       }




        // this.darkAngelsUnits = units;
      })
  }
}
