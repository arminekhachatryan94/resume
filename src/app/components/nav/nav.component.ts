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
    this.color = 'rgb(226, 243, 255)';
  }

  onMouseOver(name) {
    document.getElementById(name).style.backgroundColor = this.color;
  }

  onMouseLeave(name) {
    document.getElementById(name).style.backgroundColor = "";
  }

  hamburgerBar() {
    var hamburger = document.getElementById("hamburger");
    var bar1 = document.getElementById("bar1");
    var bar2 = document.getElementById("bar2");
    var bar3 = document.getElementById("bar3");
    if ( !hamburger.className.includes('responsive') ) {
      hamburger.className += " responsive";
      bar1.style.webkitTransform = "rotate(-45deg) translate(-5px, 3px)";
      bar1.style.transform = "rotate(-45deg) translate(-5px, 3px)";
      bar2.style.opacity = "0";
      bar3.style.webkitTransform = "rotate(45deg) translate(-6px, -6px)";
      bar3.style.transform = "rotate(45deg) translate(-6px, -6px)";
    } else {
      let index = hamburger.className.indexOf('responsive');
      hamburger.className = hamburger.className.substr(0, index-1) + hamburger.className.substr(index+10, hamburger.className.length);
      bar1.style.webkitTransform = "";
      bar1.style.transform = "";
      bar2.style.opacity = "";
      bar3.style.webkitTransform = "";
      bar3.style.transform = "";
    }
  }
}
