class ExpensesController < ApplicationController
  before_action :authenticate_expenses

  def find
    id = params[:id]
    render json: { a: 1 }
  end

  def authenticate_expenses
    id = params[:id]
    authenticate(id)
  end
end
