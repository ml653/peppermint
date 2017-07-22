require 'jwt'

class AuthHelper
  ALGORITHM = 'HS256'

  def self.encode(payload)
    JWT.encode({
      id: payload
    }, get_secret(), ALGORITHM)
  end

  def self.get_valid_id(token)
    begin
      hash = decode(token).first
      return hash['id'].to_i
    rescue JWT::DecodeError
      return nil
    end
  end

  private
  def self.decode(token)
    JWT.decode(token, get_secret(), true, { algorithm: ALGORITHM })
  end

  def self.get_secret
    ENV['SECRET_KEY']
  end
end
