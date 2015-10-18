import {bootstrap, Component, View, NgIf, NgFor} from 'angular2/angular2';
import ToDoStore from './todostore';

const ENTER = 13;

class ToDoApp {

  constructor() {
    this.toDoStore = new ToDoStore();

    $(".date").datetimepicker({
      format: 'L',
      //minDate: new Date(new Date() - 24*60*60*1000),
      locale: 'mk'
    });
  }
  typing($event, newdate) {
    if($event.which === ENTER && $event.target.value.trim() && 
      newdate.value.trim()) {
      this.addToDo($event.target, newdate);
    }
  }
  addToDo(todo, newdate) {
    if(todo.value.trim() && newdate.value.trim()) {
      this.toDoStore.add(todo.value, newdate.value);
      todo.value = null;
      newdate.value = null;
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
  getOverdueDays(date) {
    let today = new Date();
    let timeDiff = today.getTime() - date.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
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
