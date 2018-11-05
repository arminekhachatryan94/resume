import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  md_size: boolean;

  constructor() {
    if( window.innerWidth < 768 ){
      this.md_size = true;
    } else {
      this.md_size = false;
    }
  }
  
  ngOnInit() {
  }

  @HostListener('window:resize') resize() {
    if( window.innerWidth < 768 ){
      this.md_size = true;
    } else {
      this.md_size = false;
    }
  }
}
