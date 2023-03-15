import { useState } from 'react'
import { useGetTodoQuery } from './store/api'

export const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery()
  const [todoId, setTodoId] = useState(1)
  const { data: todo, isLoading } = useGetTodoQuery(todoId)
  const nextTodo = () => {
    setTodoId(todoId + 1)
  }
  const prevTodo = () => {
    if (todoId === 1) return
    setTodoId(todoId - 1)
  }
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>Loading: {isLoading ? 'true' : 'false'}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
      {/* <ul>
        {
          todos.map(({ id, title, completed }) => (
            <li key={id}>
              <strong>{completed ? 'done' : 'pending'}</strong>
              {title}
            </li>
          ))
        }
      </ul> */}
    </>
  )
}