# spec/models/user.rb
require 'rails_helper'

describe Expense do

  it "is invalid when empty" do
    expect(Expense.new).to be_invalid
  end

  it "is invalid without amount" do
    expect(Expense.new(user_id: 1, description: 'Sushi', date: '01-01-2000')).to be_invalid
  end

  it "is invalid without date" do
    expect(Expense.new(user_id: 1, amount: 10, description: 'Sushi')).to be_invalid
  end

  it "is invalid without description" do
    expect(Expense.new(user_id: 1, amount: 10, date: '01-01-2000')).to be_invalid
  end

  it "is invalid without a user" do
    expect(Expense.new(amount: 10, description: 'Sushi', date: '01-01-2000')).to be_invalid
  end
end
