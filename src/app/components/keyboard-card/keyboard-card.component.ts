import { Component, Input, OnInit } from '@angular/core';
import { Keyboard } from 'src/app/models/keyboard';

@Component({
  selector: 'app-keyboard-card',
  templateUrl: './keyboard-card.component.html',
  styleUrls: ['./keyboard-card.component.scss']
})
export class KeyboardCardComponent implements OnInit {

  @Input() keyboard: Keyboard;

  constructor() { 
    this.keyboard = {
      brand: '',
      model: '',
      price: 0,
      imgLink: '',
      link: '',
      switchType: [],
      size: '',
      isWireless: false,
      light: ''
    }
  }

  ngOnInit(): void {
  }
  getIsWirelessString() {
    return this.keyboard.isWireless ? 'Wireless' : 'Wired';
  }
}
