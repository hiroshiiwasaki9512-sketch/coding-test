import { Todo } from '../types';

export interface TodoState {
  todos: Todo[];
}

export type TodoAction =
  | { type: 'set'; payload: Todo[] }
  | { type: 'add'; payload: Todo }
  | { type: 'toggle'; payload: number }
  | { type: 'remove'; payload: number }
  | { type: 'update'; payload: { id: number; title: string } };

export const initialState: TodoState = {
  todos: [],
};

export function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'set':
      return { ...state, todos: action.payload };
    case 'add':
      return { ...state, todos: [action.payload, ...state.todos] };
    case 'toggle':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo,
        ),
      };
    case 'remove':
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
    case 'update':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo,
        ),
      };
    default:
      return state;
  }
}
