import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }
  getCategories(): Observable<any[]> {
    return this.db.list('/categories').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, val: c.payload.val() }));
      })
    );
  }
}
