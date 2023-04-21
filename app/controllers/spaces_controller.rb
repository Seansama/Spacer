class SpacesController < ApplicationController
  before_action :set_space, only: [:show, :update, :destroy]
  before_action :authorize_admin, only: [:show, :destroy, :update]
  #public routes
  def index
    @spaces = Space.all
    render json: @spaces
  end

  def create
    @space = Space.new(space_params)

    if @space.save
      render json: @space, status: :created
    else
      render json: @space.errors, status: :unprocessable_entity
    end
  end

  def update
    if @space.update(space_params)
      render json: @space
    else
      render json: @space.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @space.destroy
  end

  #custom admin routes
  def show
    admin = authorized_admin
    space = admin.spaces.find_by(id: params[:id])
    if space
      render json: space, status: :ok
    else
      render json: { error: 'Space not found' }, status: :not_found
    end
  end

  private

  def set_space
    @space = Space.find(params[:id])
  end

  def space_params
    params.require(:space).permit(:name, :description, :location, :hourly_rate, :daily_rate, :available_dates)
  end
end

