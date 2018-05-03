import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Music } from './../models/music';
import { Observable } from 'rxjs/observable';

@Injectable()
export class MusicService {
  private tests: AngularFirestoreCollection<Music>;
  deposits: Observable<Music>;

  constructor(private firebase: AngularFirestore) {}

  // getMusic() {
  //   return this.firebase.collection<Music>('musics').valueChanges();
  // }

  // getMusic() {
  //   debugger;
  //   this.tests = this.firebase.collection<Music>('musics');
  //   this.deposits = this.tests.stateChanges(['added'])
  //     .map(actions => {
  //       return actions.map(a => {
  //         const data = a.payload.doc.data() as Music;
  //         const id = a.payload.doc.id;
  //         return { id, ...data }
  //       });
  //     });
  // }

  // getLyric(id: number) {

  // }

  // addMusic() {
  //   const id = this.firebase.createId();
  //   artist: music.artist,
  //     songTitle: music.songTitle,
  //     lyricBody: music.lyricBody,
  //     youtubeLing: music.youtubeLink
  // }

  // insertMusic(music: Music) {
  //   return this.musicList.push({
      // artist: music.artist,
      // songTitle: music.songTitle,
      // lyricBody: music.lyricBody,
      // youtubeLing: music.youtubeLink
  //   });
  // }

  // updateMusic(music: Music) {
  //   this.musicList.update(music.$key, {
  //     artist: music.artist,
  //     songTitle: music.songTitle,
  //     lyricBody: music.lyricBody,
  //     youtubeLing: music.youtubeLink
  //   });
  // }

  // deleteMusic($key: string) {
  //   this.musicList.remove($key);
  // }
}
