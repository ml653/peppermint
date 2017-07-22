json.sum sum
json.expenses do
  expenses.each do |expense|
    json.set! expense.id do
      json.partial! '/shared/expense', expense: expense
    end
  end
end
