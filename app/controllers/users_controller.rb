class UsersController < ApplicationController

  def register
      user = User.create(user_params)
      if user.valid?
        render json: user, status: :created
      else
        render json: {error: user.errors.full_messages}, status: :unprocessable_entity
      end
  end
  def login
    email = params[:email]
    password = params[:password]
    auth_result = ApplicationController.authenticate(email, password)

    if auth_result
      render json: auth_result, status: :ok
    else
      render json: { error: 'Invalid username or password' }, status: :unprocessable_entity
    end
  end
  #def logout
  #remove_user
  #app_response(message: 'Logout successful')
  #end

    private
    def user_params
      params.permit(:username, :email, :password)
    end

    

  end
  
