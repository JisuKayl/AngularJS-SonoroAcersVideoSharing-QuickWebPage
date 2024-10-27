import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SafePipe } from './home/safe.pipe';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HistoryComponent } from './history/history.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SafePipe,
    HistoryComponent,
    NavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, YouTubePlayerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
