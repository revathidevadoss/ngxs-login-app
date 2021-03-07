import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './product/form.component';
import {ListComponent} from './sale/list.component';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductState} from './states/product.state';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        FormComponent,
        ListComponent

    ],
    imports: [
        BrowserModule,
        NgxsModule.forRoot([
            ProductState
        ]),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot(),
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
