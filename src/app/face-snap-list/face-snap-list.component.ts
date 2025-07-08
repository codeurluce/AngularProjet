import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap-list',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
faceSnaps!: FaceSnap[] 
  mySnap!: FaceSnap;
  theSnap!: FaceSnap;
  herSnap!: FaceSnap;

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
      'Mon meilleur ami',
      'Mon meilleur ami depuis toujours !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    ),
     new FaceSnap(
      'Ma voiture préférée',
      'Mon meilleur ami depuis toujours !',
      'https://picsum.photos/200/300',
      new Date(),
      70
    ),
     new FaceSnap(
      'Mon chat adoré',
      'Mon meilleur ami depuis toujours !',
      'https://picsum.photos/200/300',
      new Date(),
      225
    ),

    ];
    this.faceSnaps[1].setLocation('Londres');
  }
}
