import { NgModule } from '@angular/core';
import { LazyComponent } from './lazy.component';
import { LazyRouterModule } from './lazy.router';
import { FirstComponent } from './first/first.component';
import { EagerModule } from '../eager/eager.module';

@NgModule({
    declarations: [
        LazyComponent,
        FirstComponent
    ],
    imports: [
        LazyRouterModule,
        EagerModule
    ],
    exports: [

    ]
})
export class LazyModule {

}