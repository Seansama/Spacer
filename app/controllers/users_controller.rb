class UsersController < ApplicationController
    before_action :authenticate_user, only: [:show, :update, :destroy]

    def index
      users = User.all
      render json: users
    end
    def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
    def show
      render json: current_user
    end
    def update
      if current_user.update(user_params)
        render json: { status: 'SUCCESS', message: 'User updated successfully', data: @current_user }
      else
        render json: { status: 'ERROR', message: 'Failed to update user', data: @current_user.errors }
    end
    end
    def destroy
      if current_user.destroy
        render json: { status: 'SUCCESS', message: 'User deleted successfully', data: @current_user }
      else
        render json: { status: 'ERROR', message: 'Failed to delete user', data: @current_user.errors }
    end
    end
    private
    def user_params
        params.permit(:username, :email, :password, :role)
    end
end
  
