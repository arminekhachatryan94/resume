import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SlideshowModule } from 'ng-simple-slideshow';
import { FormsModule } from '@angular/forms';

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
import { HomeComponent } from './views/thesis/home/home.component';
import { ThesisNavComponent } from './components/thesis-nav/thesis-nav.component';
import { CytoService } from './services/cyto.service';
import { D3Service } from './services/d3.service';
import { FileService } from './services/file.service';
import { CountingInversionsComponent } from './views/thesis/counting-inversions/counting-inversions.component';
import { KruskalComponent } from './views/thesis/kruskal/kruskal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PortfolioComponent,
    FooterComponent,
    BlogComponent,
    DrawingsComponent,
    ErrorComponent,
    HomeComponent,
    ThesisNavComponent,
    CountingInversionsComponent,
    KruskalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SlideshowModule,
    routingModule,
    FormsModule
  ],
  providers: [CytoService, D3Service, FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
