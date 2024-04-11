import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // or BrowserModule if it's the root module

import { AppComponent } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),provideRouter(routes), provideClientHydration()]
};
