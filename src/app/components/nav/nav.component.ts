import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onMouseOver(name) {
    console.log(name);
    console.log(document.getElementById(name).style);
    document.getElementById(name).style.backgroundColor = 'rgb(196, 201, 216)';
  }

  onMouseLeave(name) {
    console.log(name);
    console.log(document.getElementById(name).style);
    document.getElementById(name).style.backgroundColor = "";
  }
}
