import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DiamondStatisticsComponent } from './c/diamond-statistics/diamond-statistics.component';
import { DiamondsGridComponent } from './c/diamonds-grid/diamonds-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DiamondsGridComponent,
    DiamondStatisticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
