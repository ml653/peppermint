require 'spec_helper'
require 'rails_helper'
require_relative '../../app/helpers/auth_helper'

describe ReportsController do
  before(:each) do
    @user = User.create(FactoryGirl.attributes_for(:user))
    @our_expenses = Array.new(3) { FactoryGirl.create(:expense, user_id: @user.id) }
    @other_expenses = Array.new(3) { FactoryGirl.create(:expense) }
  end

  describe "with valid JSON web token" do
    before(:each) do
      @token = AuthHelper.encode(@user.id)
      @request.session[:peppermint_web_token] = @token
      cookies[:peppermint_web_token] = @token
    end

    describe "#GET" do
      before(:each) do
        start_date = DateTime.parse('Date.parse "1900-11-01T10:00:00.00+08:00"').strftime('%Q')
        end_date = DateTime.parse('Date.parse "3000-11-01T10:00:00.00+08:00"').strftime('%Q')
        get :generate, format: :json, start_date: start_date, end_date: end_date
      end

      it "only gets user's expenses" do
        expect(assigns(:expenses).count).to eql(@our_expenses.length)
      end

      it "correctly calculates sum" do
        sum = @our_expenses.reduce(0) { |sum, n| sum + n.amount }
        expect(assigns(:sum)).to eql(sum)
      end

      it "renders the :show view" do
        response.should render_template :show
      end

      it "only gets expenses in between start_date and end_date" do
        start_date = DateTime.parse('Date.parse "2900-11-01T10:00:00.00+08:00"').strftime('%Q')
        end_date = DateTime.parse('Date.parse "3000-11-01T10:00:00.00+08:00"').strftime('%Q')
        get :generate, format: :json, start_date: start_date, end_date: end_date
        expect(assigns(:expenses).count).to eql(0)
      end
    end
  end

  describe 'without valid JSON web token' do
    before(:each) do
      @request.session[:peppermint_web_token] = nil
      cookies[:peppermint_web_token] = nil
    end

    describe '#GET' do
      it 'has status code 401' do
        get :generate, { format: :json }
        expect(response.status).to eq(401)
      end
    end
  end
end
