import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoRoutes } from './app.routes';

@NgModule({
	imports: [RouterModule.forRoot(TodoRoutes)],
	exports: [RouterModule]
})
export class TodoRoutingModule {
}
