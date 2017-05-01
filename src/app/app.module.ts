import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AddNewComponent } from './todo/add-new/add-new.component';
import { ItemListComponent } from './todo/item-list/item-list.component';
import { ItemComponent } from './todo/item/item.component';
import { FilteredTodosComponent } from './filtered-todos/filtered-todos.component';
import { TodosService } from './todos.service';

@NgModule({
	declarations: [
		AppComponent,
		AddNewComponent,
		ItemListComponent,
		ItemComponent,
		FilteredTodosComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		TodoRoutingModule,
		RouterModule
	],
	providers: [TodosService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
