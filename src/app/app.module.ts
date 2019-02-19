import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SlideshowModule } from 'ng-simple-slideshow';

import { AppComponent } from './app.component';
/* components */
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
/* views */
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { BlogComponent } from './views/blog/blog.component';
import { DrawingsComponent } from './views/drawings/drawings.component';

import { routingModule } from './app.routing';
import { ErrorComponent } from './views/error/error.component';
import { ExampleComponent } from './views/example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PortfolioComponent,
    FooterComponent,
    BlogComponent,
    DrawingsComponent,
    ErrorComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SlideshowModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
