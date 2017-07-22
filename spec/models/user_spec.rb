# spec/models/user.rb
require 'rails_helper'

describe User do

  it "is invalid when empty" do
    expect(User.new).to be_invalid
  end

  it "is invalid without a email" do
    expect(User.new(password: 'password')).to be_invalid
  end

  it "is invalid without a password" do
    expect(User.new(email: 'user@gmail.com')).to be_invalid
  end

  it "password_digest is automatically set" do
    user = User.new
    expect(user.password).to be_nil
    user.password = 'password'
    expect(user.password_digest).to_not be_nil
  end

  it "is valid with all fields set" do
    expect(User.new(email: 'user@gmail.com', password: 'password').valid?).to be true
  end

end
