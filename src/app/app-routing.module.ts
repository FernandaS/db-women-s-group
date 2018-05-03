import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LyricItemComponent } from './components/music/lyric-item/lyric-item.component';
import { LyricListComponent } from './components/music/lyric-list/lyric-list.component';
import { MusicComponent } from './components/music/music.component';


const routes: Routes = [
  { path: '', redirectTo: '/lyrics', pathMatch: 'full'},
  { path: 'lyrics', component: MusicComponent},
  { path: 'lyrics/:id', component: LyricItemComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
