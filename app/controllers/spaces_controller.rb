class SpacesController < ApplicationController
  before_action :authenticate_admin, only: [:show_spaces, :update_space, :create, :delete_space]
  before_action :authenticate_user, only: [:index, :show]
  #public routes
  def index
    spaces = Space.all
    render json: spaces, status: :ok
  end


  def show
    space = Space.find_by(id: params[:id])
    render json: space, status: :ok
  end
  def create
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
     admin = SessionsController.retrieve_admin_from_token(token)
      # Create a new space associated with the admin's ID
      space = Space.create(space_params)
      space.admin_id = admin.id
      if space.save
        render json: space, status: :created
      else
        render json: { error: space.errors.full_messages }, status: :unprocessable_entity
      end
  end


  def update_space
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    admin = SessionsController.retrieve_admin_from_token(token)

      space = Space.find_by(admin_id: admin.id)
      if space
        if space.update(
          description: params[:description]
        )
          render json: { space: space }, status: :ok
        else
          render json: { error: space.errors.full_messages }, status: :unprocessable_entity
        end
      else
        render json: { error: 'Hotel not found' }, status: :not_found
      end
  end

  def delete_space
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    admin = SessionsController.retrieve_admin_from_token(token)

      if (space = Space.find_by(admin_id: admin.id))
      space.destroy
      head :no_content
      else
        render json: { error: 'Space not found' }, status: :not_found
      end
  end


  def show_spaces
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    admin = SessionsController.retrieve_admin_from_token(token)
    if (spaces = admin.spaces.all)
      render json: spaces, status: :ok
    else
      render json: { error: spaces.errors.message }, status: :unprocessable_entity
      end
  end


  private
  def space_params
    params.require(:space).permit(:name, :description, :image_url, :location, :daily_rate, :admin_id)
  end

  def authenticate_admin
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    admin = SessionsController.retrieve_admin_from_token(token)

    unless admin
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end

  def authenticate_user
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    user = ApplicationController.retrieve_user_from_token(token)

    unless user
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
end

