class User < ApplicationRecord
  has_secure_password

  validates :email, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: { within: 6...64, allow_blank: true }

end
