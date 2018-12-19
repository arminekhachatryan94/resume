import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // scroll to top of page
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
