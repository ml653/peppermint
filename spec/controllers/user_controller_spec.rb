require 'spec_helper'
require 'rails_helper'

describe UsersController do
  it '#POST' do
    expect(true).to be true
    get :create
  end
end

    # it "saves user with correct params"
    # it "throws 422 error with incorrect params"
    # it "includes JSON web token"
