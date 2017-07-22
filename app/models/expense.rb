class Expense < ApplicationRecord
  validates :user, :amount, :description, :date, presence: true
  belongs_to :user
end
