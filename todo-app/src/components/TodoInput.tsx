import { FormEvent } from 'react';
import './TodoInput.css';

interface TodoInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  isDisabled?: boolean;
}

export function TodoInput({ value, onChange, onSubmit, placeholder, isDisabled }: TodoInputProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value.trim()) return;
    onSubmit();
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder={placeholder ?? 'Add your task'}
        onChange={(event) => onChange(event.target.value)}
        disabled={isDisabled}
      />
      <button type="submit" aria-label="Add todo" disabled={isDisabled || !value.trim()}>
        <span className="plus-icon">+</span>
      </button>
    </form>
  );
}
