import { Component, OnInit } from '@angular/core';
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

  constructor(private http: Http) { }

  ngOnInit() {
    this.drawingsPath = window.location.origin + "/assets/drawings/";
    this.getDrawings();
  }

  getDrawings() {
    this.http.get(this.drawingsPath + '/drawings.json')
    .pipe(
      map((response: Response) => response.json())
    )
    .subscribe(
      data => {
        this.drawings = data.drawings;
      }
    );
  }
}
