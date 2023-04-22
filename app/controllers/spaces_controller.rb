class SpacesController < ApplicationController
  before_action :authenticate_admin, only: [:show_spaces, :update_space, :delete_space, :create]

  #public routes
  def index
    @spaces = Space.all
    render json: @spaces
  end

  def create
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    admin = SessionsController.retrieve_admin_from_token(token)

    if admin
      # Create a new space associated with the admin's ID
      space = Space.new(space_params)
      space.admin_id = admin.id

      if space.save
        render json: { space: space }, status: :created
      else
        render json: { error: space.errors.full_messages }, status: :unprocessable_entity
      end
    else
      nil
    end
  end


  def update_space
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    admin = SessionsController.retrieve_admin_from_token(token)
    if admin
      # Find the hotel associated with the admin's ID
      space = Space.find_by(id: params[:id], admin_id: admin.id)
      if space
        # Update the hotel with the given parameters
        if space.update(
          description: params[:description],
          hourly_rate: params[:hourly_rate],
          daily_rate: params[:daily_rate]
        )
          render json: { space: space }, status: :ok
        else
          render json: { error: space.errors.full_messages }, status: :unprocessable_entity
        end
      else
        render json: { error: 'Hotel not found' }, status: :not_found
      end
    else
      nil
    end
  end

  def delete_space
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    admin = SessionsController.retrieve_admin_from_token(token)

    if admin
      # Find the hotel associated with the admin's ID
      space = Space.find_by(id: params[:id], admin_id: admin.id)

      if space
        # Delete the hotel
        space.destroy
        render json: { message: 'Hotel deleted' }, status: :ok
      else
        render json: { error: 'Hotel not found' }, status: :not_found
      end
    else
      nil
    end
  end


  def show_spaces
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    admin = SessionsController.retrieve_admin_from_token(token)

    if admin
      # Retrieve hotels associated with the admin's ID
      spaces = Space.where(admin_id: admin.id)
      render json: { spaces: spaces }, status: :ok
    else
      nil
    end
  end


  private

  def set_space
    @space = Space.find(params[:id])
  end

  def space_params
    params.require(:space).permit(:name, :description, :location, :hourly_rate, :daily_rate, :available_dates)
  end

  def authenticate_admin
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    admin = SessionsController.retrieve_admin_from_token(token)

    unless admin
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end

end

