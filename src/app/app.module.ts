import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

//components
import { MusicComponent } from './components/music/music.component';
import { LyricListComponent } from './components/music/lyric-list/lyric-list.component';
import { LyricItemComponent } from './components/music/lyric-item/lyric-item.component';

//Services
import { MusicService } from './services/music.service'

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    LyricListComponent,
    LyricItemComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    MusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
