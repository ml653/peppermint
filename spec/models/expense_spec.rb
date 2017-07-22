# spec/models/user.rb
require 'rails_helper'

describe Expense do

  it "has a valid factory" do
    FactoryGirl.create(:expense).should be_valid
  end

  it "is invalid without amount" do
    FactoryGirl.build(:expense, amount: nil).should be_invalid
  end

  it "is invalid without date" do
    FactoryGirl.build(:expense, date: nil).should be_invalid
  end

  it "is invalid without description" do
    FactoryGirl.build(:expense, description: nil).should be_invalid
  end

  it "is invalid without a user" do
    FactoryGirl.build(:expense, user_id: nil).should be_invalid
  end

end
