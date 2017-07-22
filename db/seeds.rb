# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: 'user_1@gmail.com', password: 'password', is_admin: true)
User.create(email: 'user_2@gmail.com', password: 'password', is_admin: false)

Expense.create(user_id: 1, date: '01-01-2003', description: 'In-N-Out', amount: 12.08)
Expense.create(user_id: 1, date: '23-02-2003', description: 'Sushi', amount: 22.99)
Expense.create(user_id: 2, date: '01-01-2003', description: 'In-N-Out', amount: 12.08)
Expense.create(user_id: 2, date: '01-01-2003', description: 'In-N-Out', amount: 12.08)
Expense.create(user_id: 2, date: '01-01-2003', description: 'In-N-Out', amount: 12.08)
Expense.create(user_id: 2, date: '01-01-2003', description: 'In-N-Out', amount: 12.08)
Expense.create(user_id: 2, date: '23-02-2003', description: 'Sushi', amount: 22.99)
Expense.create(user_id: 2, date: '23-02-2003', description: 'Sushi', amount: 22.99)
Expense.create(user_id: 2, date: '23-02-2003', description: 'Sushi', amount: 22.99)
Expense.create(user_id: 2, date: '23-02-2003', description: 'Sushi', amount: 22.99)
Expense.create(user_id: 2, date: '01-01-2003', description: 'In-N-Out', amount: 12.08)
Expense.create(user_id: 2, date: '23-02-2003', description: 'Sushi', amount: 22.99)
Expense.create(user_id: 2, date: '03-02-2003', description: 'Super Duper', amount: 30.23)
Expense.create(user_id: 2, date: '24-02-2003', description: '5 Guys', amount: 15.00)
