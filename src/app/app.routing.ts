import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from "./views/portfolio/portfolio.component";
import { BlogComponent } from "./views/blog/blog.component";

const routes: Routes = [
    { path: '', component: PortfolioComponent },
    { path: 'blog', component: BlogComponent }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
