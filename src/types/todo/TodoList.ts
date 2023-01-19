export interface TodoList {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type Todo = Pick<TodoList, "title" | "content">;
export type TodoUpdate = Omit<TodoList, "createdAt" | "updatedAt">;
