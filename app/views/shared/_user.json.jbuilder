json.id user.id
json.email user.email
json.expenses({})
json.expenses do
  user.get_expenses.each do |expense|
    json.set! expense.id do
      json.partial! '/shared/expense.json.jbuilder', expense: expense
    end
  end
end
