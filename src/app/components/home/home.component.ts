import { Component, OnInit } from '@angular/core';
import { Keyboard } from 'src/app/models/keyboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  updatedKeyboards: Keyboard[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  updateFilteredKeyboards(filteredKeyboards:Keyboard[]) {
    this.updatedKeyboards = filteredKeyboards;
  }
}
