class ExpensesController < ApplicationController
  before_action :authenticate_expenses

  def index
    id = params[:id]
  end

  def create
  end

  def delete
  end

  def update
  end

  def authenticate_expenses
    id = params[:id]
    authenticate(id)
  end
end
