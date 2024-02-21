import { Routes } from '@angular/router';
import { LatestbooksComponent } from './latestbooks/latestbooks.component';
import { EbooksComponent } from './ebooks/ebooks.component';
// import { HeaderComponent } from './header/header.component';
import { BookseriesComponent } from './bookseries/bookseries.component';
import { CategoriesComponent } from './categories/categories.component';
import { Top50Component } from './top50/top50.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,title:'Home'},
    {path:'latestbooks',component:LatestbooksComponent,title:'LetestBooks'},
    {path:'eBooks',component:EbooksComponent,title:'eBooks'},
    {path:'bookseries',component:BookseriesComponent,title:'Books series'},
    {path:'categories',component:CategoriesComponent,title:'Categories'},
    {path:'top50',component:Top50Component,title:'TOP50'}
];
