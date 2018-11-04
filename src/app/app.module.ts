import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

import { routingModule } from './app.routing';
import { PortfolioComponent } from './views/portfolio/portfolio.component';

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
