import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from "./views/portfolio/portfolio.component";

const routes: Routes = [
    { path: '', component: PortfolioComponent }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
