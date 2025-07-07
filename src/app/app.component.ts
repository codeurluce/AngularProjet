import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Mon meilleur ami',
      'Mon meilleur ami depuis toujours !',
      'https://picsum.photos/200/300',
      new Date(),
      0
    );
  }

}
