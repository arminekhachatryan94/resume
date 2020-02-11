import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from "./views/portfolio/portfolio.component";
import { BlogComponent } from "./views/blog/blog.component";
import { DrawingsComponent } from "./views/drawings/drawings.component";
import { ErrorComponent } from "./views/error/error.component";
import { ExampleComponent } from "./views/example/example.component";
import { HomeComponent } from "./views/thesis/home/home.component";

const routes: Routes = [
    { path: '', component: PortfolioComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'drawings', component: DrawingsComponent },
    { path: 'example', component: ExampleComponent },
    { path: 'thesis', component: HomeComponent },
    { path: '**', component: ErrorComponent }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
