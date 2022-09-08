import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/Account/home/home/home.component';
import { AlertComponent } from './component/alert/alert.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { fakeBackendProvider } from './fakebackend/fakebackend';
import { ErrorInterceptor } from './helper/interceptor/error.interceptor';
import { JwtInterceptor } from './helper/interceptor/jwt.interceptor';
import { ProductListComponent } from './modules/product/product-list/product-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
