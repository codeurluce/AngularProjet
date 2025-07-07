import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText!: string;
  userSnapped!: boolean;

  ngOnInit(): void {
    this.title = 'FaceSnap';
    this.description = 'Mon meilleur ami depuis toujours !';
    this.createdAt = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://picsum.photos/200/300';
    this.snapButtonText = '👍🏼';
    this.userSnapped = false;
  }
  onSnap(): void {
    if (this.userSnapped) {
      this.snaps--;
      this.snapButtonText = '👍🏼';
      this.userSnapped = false;
    } else {
      this.snaps++;
      this.snapButtonText = '👎🏼';
      this.userSnapped = true;
    }
  }
}
