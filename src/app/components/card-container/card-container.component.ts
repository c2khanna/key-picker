import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Keyboard } from 'src/app/models/keyboard';
import { KeyboardService } from 'src/app/services/keyboard.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit, OnChanges {
  @Input() filteredKeyboards: Keyboard[] = [];
  keyboards: Keyboard[] = [];
  sortOrder: string = 'brandAToZ';

  constructor(private keyboardService: KeyboardService) { }

  ngOnInit(): void {
    this.keyboardService.getAllKeyboards().subscribe((keyboards) => {
      this.keyboards = keyboards.sort((a:Keyboard, b:Keyboard) => {
        if(a.brand < b.brand) { return -1; }
        if(a.brand > b.brand) { return 1; }
        return 0;
      });
    });
  }
  ngOnChanges(): void {
    this.keyboards = this.filteredKeyboards;
    this.onSortOrderChange("");
  }

  onSortOrderChange(value: string) {
    if (this.sortOrder === "brandAToZ") {
      this.keyboards = this.keyboards.sort((a:Keyboard, b:Keyboard) => {
        if(a.brand < b.brand) { return -1; }
        if(a.brand > b.brand) { return 1; }
        return 0;
      });
    } else if (this.sortOrder === "brandZToA") {
      this.keyboards = this.keyboards.sort((a:Keyboard, b:Keyboard) => {
        if(a.brand < b.brand) { return -1; }
        if(a.brand > b.brand) { return 1; }
        return 0;
      }).reverse();
    } else if (this.sortOrder === "priceLowToHigh") {
      this.keyboards = this.keyboards.sort((a:Keyboard, b:Keyboard) => a.price - b.price)
    } else {
      this.keyboards = this.keyboards.sort((a:Keyboard, b:Keyboard) => b.price - a.price)
    }
  }
}
