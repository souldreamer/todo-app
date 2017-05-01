import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getTodoPartialFromString, Todo } from '../../todo';

@Component({
	selector: 'todo-item-list',
	templateUrl: './item-list.component.html',
	styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
	@Input() todos: Todo[] = [];
	@Input() filterTag = '*';
	@Input() filterStatus = 'all';
	
	@Output() edit = new EventEmitter<Todo>();
	
	getTodoPartialFromString = getTodoPartialFromString;
	
	constructor() { }
	
	ngOnInit() {
	}
	
	trackById(todo: Todo) {
		return todo.id;
	}
	
	editTodo(todo: Todo, ...changes: Partial<Todo>[]) {
		const changeObject: Partial<Todo> = changes.reduce((prev, change) => ({...prev, ...change}), {} as Partial<Todo>);
		this.edit.emit({...todo, ...changeObject});
	}
	
	getCompletedTodos(): Todo[] {
		return this.todos.filter(todo => todo.completed);
	}
}
