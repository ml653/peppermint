// Authentication
export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/users',
    data: { user }
  })
)

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/session',
    data: { user }
  })
)

export const loadUser = user => (
  $.ajax({
    method: 'GET',
    url: '/session',
    headers: { 'x-my-custom-header': 'some value' },
    data: { user }
  })
)

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/session'
  })
)

// Expenses
export const indexExpenses = () => (
  $.ajax({
    method: 'GET',
    url: '/expenses/'
  })
)

export const createExpenses = (expense) => (
  $.ajax({
    method: 'POST',
    url: `/expenses/`,
    data: { expense }
  })
)

export const deleteExpenses = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/expenses/${id}`
  })
)

export const updateExpenses = (expense) => (
  $.ajax({
    method: 'PATCH',
    url: `/expenses/${expense.id}`,
    data: { expense }
  })
)

export const generateReport = (startDate, endDate) => (
  $.ajax({
    method: 'GET',
    url: `/reports/generate?start_date=${startDate}&end_date=${endDate}`,
  })
)
