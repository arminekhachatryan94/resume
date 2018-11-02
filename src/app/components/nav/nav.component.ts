import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  color: string

  constructor() { }

  ngOnInit() {
    this.color = 'rgb(222, 227, 240)';
  }

  onMouseOver(name) {
    document.getElementById(name).style.backgroundColor = this.color;
  }

  onMouseLeave(name) {
    document.getElementById(name).style.backgroundColor = "";
  }
}
