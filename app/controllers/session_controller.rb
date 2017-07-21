require_relative './auth_helper'

class SessionController < ApplicationController

  def create
    @user = User.find_by(email: login_params[:email])
    if @user && @user.authenticate(login_params[:password])
      @token = AuthHelper.encode(@user.id.to_s)
      render :show
    else
      render json: ["Sorry, you entered an incorrect email address or password."], status: 422
    end
  end

  def login_params
    params.require(:user).permit(:email, :password)
  end
end
