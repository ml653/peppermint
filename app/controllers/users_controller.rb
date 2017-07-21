require_relative './auth_helper'

class UsersController < ApplicationController

  def create
    @user = User.new(login_params)
    if @user.save
      @token = AuthHelper.encode(@user.id)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def login_params
    params.require(:user).permit(:email, :password)
  end
end
