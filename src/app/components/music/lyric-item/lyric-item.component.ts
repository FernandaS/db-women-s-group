import { Observable } from 'rxjs/observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Music Service
import { MusicService } from './../../../services/music.service';
import { Music } from './../../../models/music';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


@Component({
  selector: 'app-lyric-item',
  templateUrl: './lyric-item.component.html',
  styleUrls: ['./lyric-item.component.css']
})
export class LyricItemComponent implements OnInit {
  private lyricDoc: AngularFirestoreDocument<Music>;
  lyric: Observable<Music>;
  id: number;
  private sub: any;

  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.lyricDoc = this.afs.doc<Music>(`musics/${this.id}`);
    this.lyric = this.lyricDoc.valueChanges();
  }

}
