import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { ListItemComponent } from './list-item/list-item.component';
import { NavComponent } from './nav/nav.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { from } from 'rxjs';


const routes = [
  {path: '', component: ListingComponent},
  {path: 'add', component: ListItemComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    ListItemComponent,
    NavComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
