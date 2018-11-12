import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
/* components */
import { NavComponent } from './components/nav/nav.component';
/* views */
import { PortfolioComponent } from './views/portfolio/portfolio.component';

import { routingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
