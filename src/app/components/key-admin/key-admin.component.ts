import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import {Keyboard} from '../../models/keyboard';
import axios from 'axios';
import { KeyboardService } from 'src/app/services/keyboard.service';

@Component({
  selector: 'app-key-admin',
  templateUrl: './key-admin.component.html',
  styleUrls: ['./key-admin.component.scss']
})
export class KeyAdminComponent {

  brand = '';
  model = '';
  price = 0;
  link = '';
  imgLink = '';
  switchType:string[] = [];
  size = 'Full';
  isWireless = true;
  light = "N/A";

  constructor(private keyboardService:KeyboardService) { }

  onSwitchTypeChecked(checked: boolean, type: string) {
    if(checked) {
      this.switchType.push(type)
    } else {
      this.switchType.splice(this.switchType.indexOf(type), 1);
    }
  }

  onKeyboardSubmit() {
    let newKeyboardData:Keyboard = {
      brand: this.brand,
      model: this.model,
      price: this.price,
      link: this.link,
      imgLink: this.imgLink,
      switchType: this.switchType,
      size: this.size,
      isWireless: this.isWireless,
      light: this.light
    }

    this.keyboardService.addNewKeyboard(newKeyboardData).subscribe(() => {
      this.brand = '';
      this.model = '';
      this.price = 0;
      this.link = '';
      this.imgLink = '';
      this.switchType = [];
      this.size = 'Full';
      this.isWireless = true;
      this.light = "N/A";
      alert('successfully added data to DB');
    }, (e) => {
      console.error("error", e);
      alert('Something went wrong');
    });
  }
}
