import { KeyboardEvent, useEffect, useState } from 'react';
import { Todo } from '../types';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, title: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.title);

  useEffect(() => {
    setDraft(todo.title);
  }, [todo.title]);

  const saveEdit = () => {
    const trimmed = draft.trim();
    if (!trimmed) {
      setDraft(todo.title);
      setIsEditing(false);
      return;
    }
    onUpdate(todo.id, trimmed);
    setIsEditing(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      saveEdit();
    }
    if (event.key === 'Escape') {
      setDraft(todo.title);
      setIsEditing(false);
    }
  };

  const toggleEditing = () => {
    if (isEditing) {
      saveEdit();
    } else {
      setIsEditing(true);
    }
  };

  return (
    <li className={`todo-card ${todo.completed ? 'completed' : ''}`}>
      <label className="todo-main">
        <input
          type="checkbox"
          checked={todo.completed}
          aria-label={`Mark ${todo.title} as ${todo.completed ? 'incomplete' : 'complete'}`}
          onChange={() => onToggle(todo.id)}
        />
        {isEditing ? (
          <input
            className="edit-input"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={saveEdit}
            autoFocus
          />
        ) : (
          <span className="todo-title" onDoubleClick={() => setIsEditing(true)}>
            {todo.title}
          </span>
        )}
      </label>
      <div className="todo-actions">
        <button
          className="icon-button"
          aria-label={`Edit ${todo.title}`}
          onClick={toggleEditing}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4 17.25V20h2.75L17.81 8.94l-2.75-2.75L4 17.25z"
              fill="currentColor"
            />
            <path
              d="M20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button className="icon-button danger" aria-label={`Delete ${todo.title}`} onClick={() => onDelete(todo.id)}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zm12.5-14H16l-.71-.71A.996.996 0 0 0 14.59 4h-5.2c-.26 0-.52.1-.7.29L8 5H4.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}
