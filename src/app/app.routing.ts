import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from "./views/portfolio/portfolio.component";
import { BlogComponent } from "./views/blog/blog.component";
import { DrawingsComponent } from "./views/drawings/drawings.component";
import { ErrorComponent } from "./views/error/error.component";
import { HomeComponent } from './views/thesis/home/home.component';
import { CountingInversionsComponent } from './views/thesis/counting-inversions/counting-inversions.component';
import { KruskalComponent } from './views/thesis/kruskal/kruskal.component';

const routes: Routes = [
    { path: '', component: PortfolioComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'drawings', component: DrawingsComponent },
    { path: 'thesis',
        children: [
            { path: '', component: HomeComponent },
            { path: 'counting-inversions', component: CountingInversionsComponent },
            { path: 'kruskal', component: KruskalComponent }
        ]
    },

    { path: '**', component: ErrorComponent }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
