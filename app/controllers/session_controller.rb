require_relative '../helpers/auth_helper'

class SessionController < ApplicationController

  def create
    @user = User.find_by(email: login_params[:email])
    if @user && @user.authenticate(login_params[:password])
      @token = AuthHelper.encode(@user.id)
      login!(@token)
      render :show
    else
      render json: ["Sorry, you entered an incorrect email address or password."], status: 422
    end
  end

  def destroy
    # Should add Token to blacklist to invalidate in addition to removing JWT from session
    # Not implemented in the interest of time
    logout!
  end

  def login_params
    params.require(:user).permit(:email, :password)
  end
end
