require_relative './auth_helper'

class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :authenticate, :current_user

  def current_user(token)
    id = AuthHelper.get_valid_id(token)
    if id
      return @current_user = User.find(id)
    end
  end

  def get_token
    request.env.fetch("HTTP_AUTHORIZATION").split("\s").last
  end

  def authenticate(user_id)
    token = get_token
    id = AuthHelper.get_valid_id(token)
    if id != user_id
      render json: {error: "unauthorized"}, status: 401
    end
  end
end
