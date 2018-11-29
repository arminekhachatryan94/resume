import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.css']
})
export class DrawingsComponent implements OnInit {
  drawingsPath = '';
  drawings: String[];

  @ViewChild('slideshow') slideshow: any;

  constructor(private http: Http) { }

  ngOnInit() {
    this.drawingsPath = window.location.origin + "/assets/drawings/";
    this.getDrawings();
    this.setupSlideShow();
  }

  getDrawings() {
    this.http.get(this.drawingsPath + '/drawings.json')
    .pipe(
      map((response: Response) => response.json())
    )
    .subscribe(
      data => {
        this.drawings = data.drawings;
        for(let i = 0; i < this.drawings.length; i++) {
          this.drawings[i] = this.drawingsPath + this.drawings[i];
        }
      }
    );
  }

  setupSlideShow() {
    console.log(this.slideshow);
    this.slideshow.backgroundSize="cover";
    this.slideshow.backgroundRepeat="no-repeat";
    this.slideshow.height="500px";
    this.slideshow.showDots="true";
  }
}
