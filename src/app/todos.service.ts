import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as uuid from 'uuid';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodosService {
	private todos: Todo[] = [
		{id: uuid.v4(), completed: true, content: 'Already done this', tags: ['stuff']},
		{id: uuid.v4(), completed: true, content: 'Didn\'t want to do this', tags: ['stuff', 'evil']},
		{id: uuid.v4(), completed: false, content: 'Necessary, but can\'t wait', tags: ['good', 'imperative']},
		{id: uuid.v4(), completed: false, content: 'Feed the kitties', tags: ['good']},
		{id: uuid.v4(), completed: false, content: 'Study magic', tags: ['good', 'optional']},
		{id: uuid.v4(), completed: true, content: 'Send report', tags: ['imperative', 'evil']}
	];
	public todos$ = new BehaviorSubject<Todo[]>(this.todos);
	public tags$: Observable<string[]>;
	
	constructor() {
		this.tags$ = this
			.todos$
			.map(todos => Array.from(new Set(todos.reduce((prev, todo) => [...prev, ...todo.tags], []))).sort());
	}
	
	addTodo(todo: Todo) {
		this.todos = [...this.todos, {...todo, id: uuid.v4()}];
		this.todos$.next(this.todos);
	}
	
	editTodo(todo: Todo) {
		this.todos = this.todos.map(t => t.id === todo.id ? todo : t);
		this.todos$.next(this.todos);
	}
	
	deleteTodo(todo: Todo) {
		this.todos = this.todos.filter(t => t.id !== todo.id);
		this.todos$.next(this.todos);
	}
}
