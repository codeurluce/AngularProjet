import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})


export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userSnapped!: boolean;

  ngOnInit(): void {
    this.snapButtonText = '👍🏼';
    this.userSnapped = false;
  }
  onSnap(): void {
    if (this.userSnapped) {
      this.faceSnap.removeSnap();
      this.snapButtonText = '👍🏼';
      this.userSnapped = false;
    } else {
      this.faceSnap.addSnap();
      this.snapButtonText = '👎🏼';
      this.userSnapped = true;
    }
  }
}
