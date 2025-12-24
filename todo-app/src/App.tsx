import { useEffect, useMemo, useReducer, useState } from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { StatusBanner } from './components/StatusBanner';
import { Todo } from './types';
import { initialState, todoReducer } from './state/todoReducer';
import './App.css';

const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=15';

type StatusTone = 'success' | 'error' | 'info';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTitle, setNewTitle] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [statusTone, setStatusTone] = useState<StatusTone>('info');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchTodos() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Todo[] = await response.json();
        if (!cancelled) {
          dispatch({ type: 'set', payload: data });
          setStatusMessage('Loaded starter tasks.');
          setStatusTone('info');
        }
      } catch (error) {
        console.error('Failed to fetch todos:', error);
        if (!cancelled) {
          setStatusMessage('Could not load remote todos. You can still create new ones.');
          setStatusTone('error');
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    fetchTodos();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!statusMessage || statusTone === 'error') return;
    const timer = setTimeout(() => setStatusMessage(''), 2600);
    return () => clearTimeout(timer);
  }, [statusMessage, statusTone]);

  const handleAdd = () => {
    const trimmed = newTitle.trim();
    if (!trimmed) return;
    const newTodo: Todo = {
      id: Date.now(),
      title: trimmed,
      completed: false,
    };
    dispatch({ type: 'add', payload: newTodo });
    setNewTitle('');
    setStatusMessage('Todo item created successfully.');
    setStatusTone('success');
  };

  const handleToggle = (id: number) => dispatch({ type: 'toggle', payload: id });
  const handleDelete = (id: number) => dispatch({ type: 'remove', payload: id });
  const handleUpdate = (id: number, title: string) =>
    dispatch({ type: 'update', payload: { id, title } });

  const completedCount = useMemo(
    () => state.todos.filter((todo) => todo.completed).length,
    [state.todos],
  );

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="title-group">
          <h1>ToDo List</h1>
          <span aria-hidden="true">🗒️ ✏️</span>
        </div>
        <p className="subtitle">A crisp, modern task manager powered by React + Vite.</p>
        <div className="summary-pill">
          <span>{state.todos.length} tasks</span>
          <span className="dot" />
          <span>{completedCount} done</span>
        </div>
      </header>

      <main className="panel">
        <TodoInput
          value={newTitle}
          onChange={setNewTitle}
          onSubmit={handleAdd}
          isDisabled={isLoading}
          placeholder={isLoading ? 'Loading your todos…' : 'Add your task'}
        />

        <StatusBanner message={statusMessage} tone={statusTone} />

        {isLoading ? (
          <p className="helper">Fetching your starter tasks…</p>
        ) : state.todos.length === 0 ? (
          <p className="helper">No todos yet. Add your first task to get started.</p>
        ) : null}

        <ul className="todo-list">
          {state.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
