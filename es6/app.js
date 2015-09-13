import {bootstrap, Component, View, NgIf, NgFor} from 'angular2/angular2';
import ToDoStore from './todostore';

const ENTER = 13;

class ToDoApp {

  constructor() {
    this.NewToDoText = "";
    this.toDoStore = new ToDoStore();
  }

  typing($event) {
    if($event.which === ENTER && $event.target.value.trim()) {
      this.addToDo($event.target);
    }
  }

  addToDo(todo) {
    if(todo.value.trim()) {
      this.toDoStore.add(todo.value);
      todo.value = null;
    }
  }

  editToDo(todo) {
    todo.isEdit = true;
  }

  cancelEdit(todo) { 
    todo.isEdit = false; 
  }

  saveEdit(edittodo, id, todo) {
    let editedText = edittodo.value.trim();
    todo.isEdit = false;

    if (editedText) {
      todo.text = editedText;
      this.toDoStore.updateStore();
    }
    else {
      return this.toDoStore.remove(id);
    }
  }

}

ToDoApp.annotations = [

  new Component({
    selector: 'todo-app'
  }), 
  new View({
    templateUrl: 'todoapp.html',
    directives: [NgIf, NgFor]
  })

];

bootstrap(ToDoApp);