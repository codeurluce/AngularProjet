import { FaceSnap } from "../models/face-snap";
import { Injectable } from "@angular/core";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
            'Mon meilleur ami',
            'Mon meilleur ami depuis toujours !',
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            new Date(),
            20
        ),
        new FaceSnap(
            'A la montagne',
            'Mon meilleur ami depuis toujours !',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            new Date(),
            70
        ).withLocation('à la montagne'),
        new FaceSnap(
            'Image Aleatoire',
            'Mon meilleur ami depuis toujours !',
            'https://picsum.photos/200/300',
            new Date(),
            225
        ),
    ];
    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }

    getFaceSnapById(faceSnapId: string): FaceSnap {
        const foundFaceSnap: FaceSnap | undefined = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
            throw new Error('FaceSnap not found');
        }
        return foundFaceSnap;
    }

    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const faceSnap: FaceSnap = this.getFaceSnapById(faceSnapId);
        faceSnap.snap(snapType);
    }
}