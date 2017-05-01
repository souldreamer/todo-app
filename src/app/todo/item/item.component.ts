import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getStringFromTodo } from '../../todo';

@Component({
	selector: 'todo-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
	@Input() content = '';
	@Input() tags: string[] = [];
	@Input() completed = false;
	@Input() editing = false;
	@Output() edit = new EventEmitter<boolean>();
	@Output() valueChange = new EventEmitter<string>();
	@Output() toggleCompleted = new EventEmitter();
	
	constructor() { }
	
	ngOnInit() {
	}
	
	getEditString(): string {
		return getStringFromTodo({id: '', tags: this.tags, editing: this.editing, content: this.content, completed: this.completed});
	}
	
	changeTodo(newValue: string) {
	
	}
}
