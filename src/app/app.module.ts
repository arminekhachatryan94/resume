import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
/* components */
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
/* views */
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { BlogComponent } from './views/blog/blog.component';
import { DrawingsComponent } from './views/drawings/drawings.component';

import { routingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PortfolioComponent,
    FooterComponent,
    BlogComponent,
    DrawingsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
