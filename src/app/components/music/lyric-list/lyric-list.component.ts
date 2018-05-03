import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

// Music Service
import { MusicService } from './../../../services/music.service';
import { Music } from './../../../models/music';

@Component({
  selector: 'app-lyric-list',
  templateUrl: './lyric-list.component.html',
  styleUrls: ['./lyric-list.component.css']
})
export class LyricListComponent implements OnInit {
  private musicCollection: AngularFirestoreCollection<Music>;
  public musics: Observable<any[]>;

  constructor(afs: AngularFirestore) {
    this.musicCollection = afs.collection<Music>('musics');
    this.musics = this.musicCollection.snapshotChanges().map(action => {
      return action.map(a => {
        const data = a.payload.doc.data() as Music;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    console.log('this.musics', this.musics);
   }

  ngOnInit() {
    // this.getMusic();
  }

  // getMusic()  {
  //   this.mService.getMusic().subscribe((data) => {
  //     this.musicList = data;
  //     console.log('this.musicList', this.musicList);
  //   });
  // }
}
