import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './common/services/auth.service';
import { UnauthorizedComponent } from './common/components/unauthorized/unauthorized.component';

const APP_ROUTES: Route[] = [
    {
        path: '',
        component: LoginComponent
    }, 
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'unauthorized',
        component: UnauthorizedComponent
    },
    {
        path: 'lazy',
        loadChildren: './lazy/lazy.module#LazyModule'
    },
    {
        path: '**',
        component: UnauthorizedComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouterModule {

}