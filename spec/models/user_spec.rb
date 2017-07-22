require 'rails_helper'

describe User do

  it "has a valid factory" do
    FactoryGirl.create(:user).should be_valid
  end

  it "is invalid without a email" do
    FactoryGirl.build(:user, email: nil).should be_invalid
  end

  it "is invalid without a password" do
    FactoryGirl.build(:user, password: nil).should be_invalid
  end

  it "password_digest is automatically set" do
    user = FactoryGirl.build(:user, password: nil)
    expect(user.password).to be_nil
    user.password = 'password'
    expect(user.password_digest).to_not be_nil
  end

end
