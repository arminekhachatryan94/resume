import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
/* components */
import { NavComponent } from './components/nav/nav.component';
/* views */
import { PortfolioComponent } from './views/portfolio/portfolio.component';

import { routingModule } from './app.routing';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './views/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PortfolioComponent,
    FooterComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
