import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { doc, setDoc } from '@firebase/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos$: Observable<any>;
  todos;
  todotext = '';

  constructor(private firestore: Firestore) {

    const coll = collection(firestore, 'todo');
    this.todos$ = collectionData(coll);

    this.todos$.subscribe( (todos)=>{
      this.todos = todos;
      console.log('new from Firebase', this.todos);

    });
  }

  // to do add in Firebase
  addToDo(){
    // mit coll griefen wir collection todo in firestone an
    const coll = collection(this.firestore, 'todo');

    // mit setdoc speichern wir es in Firebase
    setDoc(doc(coll), {name: this.todotext});
  }
}
