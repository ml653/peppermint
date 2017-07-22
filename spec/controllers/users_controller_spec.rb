require "spec_helper"
require "rails_helper"

describe UsersController do
  describe "#POST/create" do

    describe "successful signup" do
      before(:each) do
        @user = FactoryGirl.attributes_for(:user)
        @count = User.count
        post :create, { user: @user, format: :json }
      end

      it "assigns new User to @user" do
        expect(assigns(:user).email).to eq @user[:email]
      end

      it "assigns JSON web token to @token" do
        expect(assigns(:token)).to_not be_nil
      end

      it "renders the :show view" do
        response.should render_template :show
      end

      it "saves to database" do
        expect(User.count).to eq @count + 1
      end
    end

    describe "unsuccessful signup" do
      before(:each) do
        @user = FactoryGirl.attributes_for(:user, password: nil)
        @count = User.count
        post :create, { user: @user, format: :json }
      end

      it "have status code 422" do
        expect(response.status).to eq(422)
      end

      it "has nil JWT" do
        expect(assigns(:token)).to be_nil
      end

      it "does not save to database" do
        expect(User.count).to eq @count
      end
    end
  end
end
