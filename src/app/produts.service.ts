import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutsService {

  constructor(private db: AngularFireDatabase) { }

  create(product: any){
      return this.db.list('/products').push(product);
  }
  getProduct(Id: string): Observable<any> {
    return this.db.object('/products/'+ Id).snapshotChanges().
    pipe(map(data => {
        const $key = data.payload.key;
        const val = data.payload.val();
        console.log(data.payload.val());
        return { $key,  val};
    }));
  }

  getAll(): Observable<any[]> {
    return this.db.list('/products').snapshotChanges()
      .pipe(map(data => {
        return data.map(action => {
          const $key = action.payload.key;
          const val = action.payload.val();
          const data = { $key,  val};
          return data;
        });
      }));
  }
}
