import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Music } from '../../../models/music';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/combineLatest';
import { Query } from '@firebase/firestore-types';


@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.css']
})
export class SearchMusicComponent implements OnInit {
  music$: Observable<Music[]>;
  artist$: BehaviorSubject<string|null>;
  songTitle$: BehaviorSubject<string|null>;

  constructor(afs: AngularFirestore) {
    this.artist$ = new BehaviorSubject(null);
    this.songTitle$ = new BehaviorSubject(null);
    this.music$ = Observable.combineLatest(
      this.artist$,
      this.songTitle$
    ).switchMap(([artist, songTitle]) =>
      afs.collection('musics', ref => {
        let query: Query = ref;
        console.log('Query', query);
        if (artist) { query = query.where('artist', '==', artist); }
        if (songTitle) { query = query.where('sontTitle', '==', songTitle); }
        return query;
      }).valueChanges()
    );
  }

  search(artist: string): void {
    this.artist$.next(artist);
  }

   ngOnInit(): void {
    // this.music$ = this.searchTerms.pipe(
    //   debounceTime(300),

    //   distinctUntilChanged(),

    //   switchMap((term: string) => this.afs('musics')),
    // );
    // console.log('-------Music-----', this.music$);
  }

}
