import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos.service';
import { EMPTY_TODO, getTodoPartialFromString, Todo } from '../todo';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/combineLatest';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'todo-filtered-todos',
	templateUrl: './filtered-todos.component.html',
	styleUrls: ['./filtered-todos.component.css']
})
export class FilteredTodosComponent implements OnInit, OnDestroy {
	todos$: Observable<Todo[]>;
	tags$: Observable<string[]>;
	
	constructor(public route: ActivatedRoute, private todosService: TodosService) {
		this.tags$ = this.todosService.tags$;
	}
	
	ngOnInit() {
		this.todos$ = this
			.todosService.todos$
			.combineLatest(this.route.paramMap, (todos: Todo[], paramMap) =>
				todos
					.filter(todo => paramMap.get('tag') === '*' || todo.tags.includes(paramMap.get('tag')))
					.filter(todo => paramMap.get('status') === 'all' || todo.completed === (paramMap.get('status') === 'completed'))
			);
	}
	
	ngOnDestroy() {
	
	}
	
	addTodo(todoString: string) {
		this.todosService.addTodo({...EMPTY_TODO, ...getTodoPartialFromString(todoString)});
	}
	
	editTodo(todo: Todo) {
		console.log('edit todo', {todo});
		this.todosService.editTodo(todo);
	}
}
