require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  RSpec.describe UsersController, type: :controller do
    describe 'POST #register' do
      context 'with valid parameters' do
        let(:valid_params) { { username: 'johndoe', email: 'johndoe@example.com', password: 'password' } }
  
        it 'creates a new user' do
          expect { post :register, params: valid_params }.to change(User, :count).by(1)
        end
  
        it 'returns a JSON response with status code 201' do
          post :register, params: valid_params
          expect(response).to have_http_status(:created)
          expect(response.content_type).to eq('application/json')
        end
      end
  
      context 'with invalid parameters' do
        let(:invalid_params) { { username: 'johndoe', email: 'johndoe@example.com' } }
  
        it 'does not create a new user' do
          expect { post :register, params: invalid_params }.not_to change(User, :count)
        end
  
        it 'returns an error JSON response with status code 422' do
          post :register, params: invalid_params
          expect(response).to have_http_status(:unprocessable_entity)
          expect(response.content_type).to eq('application/json')
          expect(JSON.parse(response.body)['error']).to be_present
        end
      end
    end
  
    describe 'POST #login' do
      let!(:user) { create(:user, email: 'johndoe@example.com', password: 'password') }
  
      context 'with valid email and password' do
        let(:valid_params) { { email: 'johndoe@example.com', password: 'password' } }
  
        it 'returns a JSON response with status code 200' do
          post :login, params: valid_params
          expect(response).to have_http_status(:ok)
          expect(response.content_type).to eq('application/json')
        end
  
        it 'returns the user details in the response' do
          post :login, params: valid_params
          expect(JSON.parse(response.body)['id']).to eq(user.id)
          expect(JSON.parse(response.body)['username']).to eq(user.username)
          expect(JSON.parse(response.body)['email']).to eq(user.email)
        end
      end
  
      context 'with invalid email or password' do
        let(:invalid_params) { { email: 'johndoe@example.com', password: 'wrongpassword' } }
  
        it 'returns an error JSON response with status code 422' do
          post :login, params: invalid_params
          expect(response).to have_http_status(:unprocessable_entity)
          expect(response.content_type).to eq('application/json')
          expect(JSON.parse(response.body)['error']).to eq('Invalid username or password')
        end
      end
    end
  end  
end
