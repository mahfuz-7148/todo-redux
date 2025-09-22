export const selectTodos = state => state.todos.items
export const selectFilter = state => state.todos.filter
export const selectFilteredTodos = state => {
  const todos = state.todos.items
  const filter = state.todos.filter

  switch (filter) {

  }
}