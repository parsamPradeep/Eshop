import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }
  getAll(): Observable<any[]> {
    return this.db.list('/categories').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => {
          const key = c.payload.key;
          const val = c.payload.val();
          const obj = val ? { ...val } : null;
          const data = { key, ...obj };
          return data;  
         }
        );
      })
    );
  }
}
