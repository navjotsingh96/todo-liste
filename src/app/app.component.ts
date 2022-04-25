import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { doc, onSnapshot } from "firebase/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos$: Observable<any>;


  constructor(firestore: Firestore) {

    const coll = collection(firestore, 'todo');
    this.todos$ = collectionData(coll);

    this.todos$.subscribe( (todos)=>{
      console.log('new from Firebase', todos);

    });
  }
}
