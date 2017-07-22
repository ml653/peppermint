require "spec_helper"
require "rails_helper"

describe SessionController do
  describe "#POST" do

    describe "successful signup" do
      before(:each) do
        user_attributes = FactoryGirl.attributes_for(:user)
        @user = User.create(user_attributes)
        post :create, { user: user_attributes, format: :json }
      end

      it "assigns new User to @user" do
        expect(assigns(:user).email).to eq @user.email
      end

      it "assigns JSON web token to @token" do
        expect(assigns(:token)).to_not be_nil
      end

      it "renders the :show view" do
        response.should render_template :show
      end
    end

    describe "unsuccessful signup" do
      before(:each) do
        @user = FactoryGirl.attributes_for(:user, password: nil)
        post :create, { user: @user, format: :json }
      end

      it "have status code 422" do
        expect(response.status).to eq(422)
      end

      it "has nil JWT" do
        expect(assigns(:token)).to be_nil
      end
    end
  end
end
