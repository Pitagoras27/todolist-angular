import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string };

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  items: Observable<Item[]>;
  constructor(private db: AngularFirestore) {
    this.items = db.collection<Item>('items').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => {
          const data = c.payload.doc.data() as Item;
          const id = c.payload.doc.id;
          return {
            id, ...data
          }
        });
      }))
  }

  getItems() {
    return this.items;
  }
}
