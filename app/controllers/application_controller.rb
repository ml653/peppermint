require_relative '../helpers/auth_helper'

class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    id = AuthHelper.get_valid_id(get_token)
    User.find_by_id(id)
  end

  def get_token
    session[:peppermint_web_token]
  end

  def login!(token)
    session[:peppermint_web_token] = token
  end

  def logout!
    session[:peppermint_web_token] = nil
  end

  def authenticate(&prc)
    # If no proc given, no special authentication scheme required
    prc ||= Proc.new { true }
    token = get_token
    user_id = AuthHelper.get_valid_id(token)

    # If no valid token or prc (custom authentication) returns false
    if !user_id || !prc.call(user_id)
      render json: {error: "unauthorized"}, status: 401
    end
  end
end
