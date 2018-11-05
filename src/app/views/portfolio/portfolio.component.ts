import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  md_size: boolean;

  constructor() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    if( width/height < .8 ){
      // landscape: width > height
      this.md_size = true;
    }
    else if( width/height > 1.5 ){
      // vertical: width < height
      this.md_size = false;
    } else {
      // square: width ~= height
      this.md_size = false;
    }
  }
  
  ngOnInit() {
  }

  @HostListener('window:resize') resize() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    if( width/height < .8 ){
      // landscape: width > height
      this.md_size = true;
    }
    else if( width/height > 1.5 ){
      // vertical: width < height
      this.md_size = false;
    } else {
      // square: width ~= height
      this.md_size = false;
    }
  }
}
