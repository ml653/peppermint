@expenses.each do |expense|
  json.set! expense.id do
    json.partial! '/shared/expense', expense: expense
  end
end
