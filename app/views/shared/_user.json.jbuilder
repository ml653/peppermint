json.id user.id
json.email user.email
json.expenses do
  user.expenses.each do |expense|
    json.set! expense.id do
      json.partial! '/shared/expense.json.jbuilder', expense: expense
    end
  end
end
