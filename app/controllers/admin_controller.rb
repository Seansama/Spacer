class AdminController < ApplicationController

  def admin_login
    email = params[:email]
    password = params[:password]
    auth_result = SessionsController.authenticate(email, password)

    if auth_result
      render json: auth_result, status: :ok
    else
      render json: { error: 'Invalid username or password' }, status: :unprocessable_entity
    end
  end


  def create
      admin = Admin.create(admin_params)
      if admin.save!
        render json: admin, status: :created
      else
        render json: {error: admin.errors.full_messages}, status: :unprocessable_entity
      end
    end
  end


  def destroy
    admin = Admin.find_by(id: params[:id])
    if admin.destroy
      head :no_content
    else
      render json: {error: 'This user could not be deleted. Perhaps check if they exist?'}, status: :not_found
    end
  end

  private
  def admin_params
    params.require(:admin).permit(:name, :email, :password)
  end