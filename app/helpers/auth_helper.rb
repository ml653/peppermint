require 'jwt'

module AuthHelper
  ALGORITHM = 'HS256'

  def self.encode(payload)
    JWT.encode({
      id: payload,
      expires: (Time.now + 1.month).to_i
    }, get_secret(), ALGORITHM)
  end

  # Returns user id if token can be parsed and has not been expired
  def self.get_valid_id(token)
    begin
      hash = decode(token).first
      if hash && hash['expires'].to_i > Time.now.to_i
        return hash['id'].to_i
      end
    rescue JWT::DecodeError
      return nil
    end
  end

  private
  def self.decode(token)
    JWT.decode(token, get_secret(), true, { algorithm: ALGORITHM })
  end

  def self.get_secret
    ENV['SECRET_KEY'] || '57443a4c052350a44638835d64fd66822f813319'
  end
end
