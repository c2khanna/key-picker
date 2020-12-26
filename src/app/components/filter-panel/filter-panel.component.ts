import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { KeyboardService } from 'src/app/services/keyboard.service';
import { Options } from '@angular-slider/ngx-slider';
import { Keyboard } from 'src/app/models/keyboard';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {
  @Output() filteredKeyboards = new EventEmitter<Keyboard[]>();
  brand: string[] = [];
  switchType: string[] = [];
  size: string[] = [];
  isWireless: boolean|null = null;
  light: string[] = [];
  low: number = 0;
  high: number = 500;
  options: Options = {
    floor: 0,
    ceil: 500
  };


  constructor(private keyboardService:KeyboardService) { }

  ngOnInit(): void {
  }

  onBrandChecked(checked: boolean, brand: string) {
    if(checked){
      this.brand.push(brand);
    } else {
      this.brand.splice(this.brand.indexOf(brand), 1);
    } 
  }

  onSwitchTypeChecked(checked: boolean, type: string) {
    if(checked){
      this.switchType.push(type);
    } else {
      this.switchType.splice(this.switchType.indexOf(type), 1);
    }
  }

  onSizeChecked(checked: boolean, size: string) {
    if(checked){
      this.size.push(size);
    } else {
      this.size.splice(this.size.indexOf(size), 1);
    }
  }

  onIsWirelessChecked(checked: boolean, isWireless: boolean) {
    if(checked && this.isWireless === null) {
      this.isWireless = isWireless
    } else if (checked && this.isWireless !== null) {
      this.isWireless = null;
    } else if(!checked && this.isWireless === null) {
      this.isWireless = !isWireless;
    } else if(!checked && this.isWireless !== null) {
      this.isWireless = null;
    }
  }

  onLightChecked(checked: boolean, light: string) {
    if(checked){
      this.light.push(light);
    } else {
      this.light.splice(this.light.indexOf(light), 1);
    }
  }

  onFilterKeyboard() {
    let filterParams = {};

    filterParams = {
      ...filterParams,
      price: {
        low: this.low,
        high: this.high
      }
    }

    if (this.brand.length !== 0) {
      filterParams = {
        ...filterParams,
        brand: this.brand
      }
    }
    
    if (this.switchType.length !== 0) {
      filterParams = {
        ...filterParams,
        switchType: this.switchType
      }
    }

    if (this.size.length !== 0) {
      filterParams = {
        ...filterParams,
        size: this.size
      }
    }

    if (this.isWireless !== null) {
      filterParams = {
        ...filterParams,
        isWireless: this.isWireless ? "true" : "false"
      }
    }

    if (this.light.length !== 0) {
      filterParams = {
        ...filterParams,
        light: this.light
      }
    }

    this.keyboardService.filterKeyboards(filterParams).subscribe((keyboards) => {
      this.filteredKeyboards.emit(keyboards);
    }, (e) => {
      console.log("err ", e);
    })
  }

}
