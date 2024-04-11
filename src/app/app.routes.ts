import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveComponent } from './pages/live/live.component';
import { HistoryComponent } from './pages/history/history.component';
import PointTableComponent from './pages/point-table/point-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: HomeComponent ,title:"Home"},
    { path: 'live', component: LiveComponent,title:"Live" },
    { path: 'history', component: HistoryComponent,title:"History" },
    { path: 'point-table', component: PointTableComponent,title:"point table" },
    {path:'header',component:Headers},
    { path: '**', redirectTo: '' }
];
