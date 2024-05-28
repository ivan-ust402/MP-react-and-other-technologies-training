export interface ITodoState {
  todos: any[]
  loading: boolean
  error: null | string
  page: number
  limit: number
}

// interface Todo {}

// payload: Todo[] - чтобы избавиться от any

export enum TodoActionsTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
}

interface IFetchTodosAction {
  type: TodoActionsTypes.FETCH_TODOS
}

interface IFetchTodosSuccessAction {
  type: TodoActionsTypes.FETCH_TODOS_SUCCESS
  payload: any[]
}

interface IFetchTodosErrorAction {
  type: TodoActionsTypes.FETCH_TODOS_ERROR
  payload: string
}

interface ISetTodoPageAction {
  type: TodoActionsTypes.SET_TODO_PAGE
  payload: number
}

export type TodoAction =
  | IFetchTodosAction
  | IFetchTodosSuccessAction
  | IFetchTodosErrorAction
  | ISetTodoPageAction
