class AdminController < ApplicationController

  def show
    if (admin = Admin.find_by(id: params[:id]))
      render json: admin, status: :ok
    else
      render json: {error: 'This admin does not exist'}, status: :not_found
    end

    def create
      if (admin = Admin.create(admin_params))
        render json: admin, status: :created
      else
        render json: {error: admin.errors.full_messages}, status: :unprocessable_entity
      end
    end
  end

  def update
    admin = Admin.find_by(id: params[:id])
    if admin.update(admin_update)
      render json: admin, status: :accepted
    else
      render json: {error: admin.errors.full_messages}, status: :unprocessable_entity
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

  def admin_login
    user = User.find_by(email:params[:email])
    if user && user.authenticate(params[:password])
      token = encode_token({id: user.id})
      render json: { user: user, token: token }, status: :ok
    else
      render json: { error: 'Invalid email or password'}, status: :unprocessable_entity
    end
  end

  private
  def admin_params
    params.require(:admin).permit(:name, :email, :password)
  end

  def admin_update
    params.require(:admin).permit(:email, :password)
  end
end
