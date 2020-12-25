import { Component, OnInit } from '@angular/core';
import { Keyboard } from 'src/app/models/keyboard';
import { KeyboardService } from 'src/app/services/keyboard.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  
  keyboards: Keyboard[] = [];

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

}
