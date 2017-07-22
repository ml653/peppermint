class ExpensesController < ApplicationController
  before_action :authenticate_expenses, only: [:index, :create, :destroy, :update]

  def index
    user = current_user
    if user.is_admin
      @expenses = Expense.all
      render :index
    else
      @expenses = Expense.where(user_id: user.id)
      render :index
    end
  end

  def create
    @expense = Expense.new(expense_params)
    @expense.user_id = current_user.id
    if @expense.save
      render :show
    else
      render json: @expense.errors.full_messages, status: 422
    end
  end

  def destroy
    @expense = Expense.find_by_id(params[:id])
    if @expense && @expense.delete
      render :show
    else
      render json: @expense.errors.full_messages, status: 422
    end
  end

  def update
    @expense = Expense.find_by_id(params[:id])
    if @expense && @expense.update(expense_params)
      render :show
    else
      render json: @expense.errors.full_messages, status: 422
    end
  end

  def authenticate_expenses
    authenticate do |user_id|
      # Requires special permissions (e.g. expense.user_id == user_id): update, delete
      p action_name, user_id
      if ['update', 'destroy'].index(action_name)
        expense = Expense.find_by_id(params[:id])
        expense && expense.user_id == user_id
      else
      # No special permissions: Index, create
        true
      end
    end
  end

  def expense_params
    params.require(:expense).permit(:date, :amount, :description)
  end
end
