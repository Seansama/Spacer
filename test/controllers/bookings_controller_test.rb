require "test_helper"

class BookingsControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  RSpec.describe BookingsController, type: :controller do
    describe "GET #index" do
      let(:user) { create(:user) }
      let(:bookings) { create_list(:booking, 3, user: user) }
      let(:token) { "Bearer #{JWT.encode({ user_id: user.id }, Rails.application.secrets.secret_key_base)}" }
      context "with a valid user token" do
        before do
          request.headers['Authorization'] = token
          get :index
        end
        it "returns a list of bookings for the user" do
          expect(response.status).to eq(200)
          expect(JSON.parse(response.body)).to eq(bookings.as_json(except: [:updated_at]))
        end
      end
      context "with an invalid user token" do
        before do
          request.headers['Authorization'] = "Bearer invalid_token"
          get :index
        end
        it "returns an unauthorized error" do
          expect(response.status).to eq(401)
          expect(JSON.parse(response.body)).to eq({"error" => "Unauthorized"})
        end
      end
    end
  end
                                                                                                                                         
end