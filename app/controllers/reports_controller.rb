class ReportsController < ApplicationController
  # No special authentication permissions except for login
  before_action :authenticate

  def generate
    start_date = DateTime.strptime(params[:start_date], '%Q')
    end_date = DateTime.strptime(params[:end_date], '%Q')

    active_record_expenses = Expense
      .where(user_id: current_user.id)
      .where('date >= ?' , start_date)
      .where('date <= ?' , end_date)

    @sum = active_record_expenses.sum(:amount)
    @expenses = active_record_expenses.to_a
    p 'a', @expenses

    render :show
  end

end
