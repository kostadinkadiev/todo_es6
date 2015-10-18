import {Injectable} from 'angular2/angular2';
import ToDo from './todo';

class ToDoStore {

	constructor() {
		this.toDos = new Map(store.get('es6-todos')) || new Map();

		for(let [key, value] of this.toDos.entries())
		{
			this.toDos.get(key).dueDate = new Date(this.toDos.get(key).dueDate);
		}

		this.reOrderToDos();
  	}
  	updateStore() {
		store.set('es6-todos', this.toDos);
		this.reOrderToDos();
	}
  	add(text, date) {

  		let dateParts = date.split('.');
  		let newDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0], 
  			0, 0, 0);

		let todo = new ToDo(text, false, false, newDate);
		this.toDos.set(uuid.v4(), todo);
		this.updateStore();
	}
	remove(id) {
		this.toDos.delete(id);
		this.updateStore();
	}
	get(isDone) {
		return [...this.toDos.values()].filter(v => v.isDone === isDone);
	}
	toggleAllTo(isDone) {
		this.toDos.forEach((v) => v.isDone = isDone);
		this.updateStore();
	}
	toggleDone(id) {
		let todo = this.toDos.get(id);
		todo.isDone = !todo.isDone;
		this.updateStore();
	}
	removeDone() {
		for(let [key, value] of this.toDos.entries())
		{
			if(value.isDone) {
				this.toDos.delete(key);
			}
		}

		this.updateStore();
	}
	getNotDone() {
		return this.get(false);
	}
	getDone() {
		return this.get(true);
	}
	areAllDone() {
		return this.toDos.size === this.getDone().length;
	}
	reOrderToDos() {
	    this.toDos = new Map([...this.toDos.entries()]
	      .sort((a,b) => a[1].dueDate - b[1].dueDate));
  	}
}

ToDoStore.annotations = [
  new Injectable()
];

export default ToDoStore;