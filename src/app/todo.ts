export interface Todo {
	id: string;
	content: string;
	tags: string[];
	completed: boolean;
	editing?: boolean;
}

export function getTodoPartialFromString(todoString: string): Partial<Todo> {
	console.log({todoString});
	const tags = todoString.match(/#\S+/g).map(tag => tag.substr(1));
	const content = todoString.replace(/\s*#\S+\s*/g, '');
	return {tags, content};
}

export function getStringFromTodo(todo: Todo) {
	const tags = todo.tags.map(tag => `#${tag}`).join(' ');
	return todo.content + (tags === '' ? '' : ` ${tags}`);
}

export const EMPTY_TODO: Todo = {
	id: '',
	content: '',
	tags: [],
	completed: false,
	editing: false
};
