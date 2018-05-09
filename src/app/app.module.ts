import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Environment
import { environment } from '../environments/environment';

// Components
import { MusicComponent } from './components/music/music.component';
import { LyricListComponent } from './components/music/lyric-list/lyric-list.component';
import { LyricItemComponent } from './components/music/lyric-item/lyric-item.component';

// Services
import { MusicService } from './services/music.service';
import { AppRoutingModule } from './/app-routing.module';
import { SearchMusicComponent } from './components/music/search-music/search-music.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    LyricListComponent,
    LyricItemComponent,
    SearchMusicComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [
    MusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
