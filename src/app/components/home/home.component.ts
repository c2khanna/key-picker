import { Component, OnInit } from '@angular/core';
import { Keyboard } from 'src/app/models/keyboard';
import { KeyboardService } from 'src/app/services/keyboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
