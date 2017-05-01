import { Route } from '@angular/router';
import { FilteredTodosComponent } from './filtered-todos/filtered-todos.component';

export const TodoRoutes: Route[] = [
	{path: '', redirectTo: '*/all', pathMatch: 'full'},
	{path: ':tag', children: [
		{path: '', redirectTo: 'all', pathMatch: 'full'},
		{path: ':status', component: FilteredTodosComponent}
	]},
];
