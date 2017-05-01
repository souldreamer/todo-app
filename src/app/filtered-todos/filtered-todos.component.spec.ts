import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredTodosComponent } from './filtered-todos.component';

describe('FilteredTodosComponent', () => {
	let component: FilteredTodosComponent;
	let fixture: ComponentFixture<FilteredTodosComponent>;
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
				declarations: [FilteredTodosComponent]
			})
			.compileComponents();
	}));
	
	beforeEach(() => {
		fixture = TestBed.createComponent(FilteredTodosComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
