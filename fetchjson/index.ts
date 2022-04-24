import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos/3'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(URL).then(response => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  logTodo(id, title, finished)

})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished: ${completed}
`)
}