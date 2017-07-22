require "rails_helper"
require_relative "../../app/helpers/auth_helper"

describe ExpensesController do
  before(:each) do
    @user = User.create(FactoryGirl.attributes_for(:user))
    @expense = FactoryGirl.create(:expense, user_id: @user.id)
  end

  describe "with valid JSON web token" do
    before(:each) do
      @token = AuthHelper.encode(@user.id)
      request.headers["Authorization"] = "BEARER #{@token}"
    end

    describe "#GET" do
      before(:each) do
        get :index, { format: :json }
      end

      it "assigns @expenses" do
        expect(assigns(:expenses)).to eq [ @expense ]
      end

      it "renders the :index view" do
        response.should render_template :index
      end
    end

    describe "#POST" do
      before(:each) do
        @count = Expense.where(user_id: @user.id).count
        expense_attributes = FactoryGirl.attributes_for(:expense)
        post :create, { expense: expense_attributes, format: :json }
      end

      it "assigns valid @expense" do
        expect(assigns(:expense)).to be_valid
      end

      it "renders the :index view" do
        response.should render_template :show
      end

      it "correctly saves to database" do
        new_count = Expense.where(user_id: @user.id).count
        expect(@count + 1).to eq(new_count)
      end
    end

    describe "#UPDATE" do
      before(:each) do
        @expense_attributes = FactoryGirl.attributes_for(:expense)
        patch :update, { id: @expense.id, expense: @expense_attributes, format: :json }
      end

      it "assigns valid @expense" do
        expect(assigns(:expense)).to be_valid
      end

      it "updates expense fields" do
        expect(assigns(:expense).amount.to_s).to eq(@expense_attributes[:amount])
      end

      it "renders the :show view" do
        response.should render_template :show
      end
    end

    describe "#DELETE" do
      before(:each) do
        @count = Expense.where(user_id: @user.id).count
        delete :destroy, { id: @expense.id, format: :json }
      end

      it "assigns valid @expense" do
        expect(assigns(:expense)).to be_valid
      end

      it "renders the :show view" do
        response.should render_template :show
      end

      it "correctly deletes from database" do
        new_count = Expense.where(user_id: @user.id).count
        expect(@count - 1).to eq(new_count)
      end
    end
  end

  describe "without valid JSON web token" do
    before(:each) do
      request.headers["Authorization"] = "BEARER invalid_token"
    end

    describe "#GET" do
      it "has status code 401" do
        get :index, { format: :json }
        expect(response.status).to eq(401)
      end
    end

    describe "#POST" do
      it "has status code 401" do
        expense_attributes = FactoryGirl.attributes_for(:expense)
        post :create, { expense: expense_attributes, format: :json }
        expect(response.status).to eq(401)
      end
    end

    describe "#UPDATE" do
      it "has status code 401" do
        expense_attributes = FactoryGirl.attributes_for(:expense)
        patch :update, { id: @expense.id, expense: expense_attributes, format: :json }
        expect(response.status).to eq(401)
      end
    end

    describe "#DELETE" do
      it "has status code 401" do
        delete :destroy, { id: @expense.id, format: :json }
        expect(response.status).to eq(401)
      end
    end
  end
end
