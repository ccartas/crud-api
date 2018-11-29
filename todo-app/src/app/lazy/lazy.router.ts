import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from '../eager/second/second.component';
import { ThirdComponent } from '../eager/third/third.component';

const LAZY_ROUTES : Route[] = [
    {
        path: '',
        component: LazyComponent
    },
    {
        path:'first',
        component: FirstComponent,
        children: [
            {
                path: '',
                component: SecondComponent,
                outlet: 'special'
            },
            {
                path: 'third',
                component: ThirdComponent,
                outlet: 'special'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(LAZY_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class LazyRouterModule {

}