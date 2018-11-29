import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from "./views/portfolio/portfolio.component";
import { BlogComponent } from "./views/blog/blog.component";
import { DrawingsComponent } from "./views/drawings/drawings.component";

const routes: Routes = [
    { path: '', component: PortfolioComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'drawings', component: DrawingsComponent },
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
