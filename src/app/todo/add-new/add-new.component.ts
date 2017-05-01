import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'todo-add-new',
	templateUrl: './add-new.component.html',
	styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
	@Output() add = new EventEmitter<string>();
	
	constructor() { }
	
	ngOnInit() {
	}
	
}
