class BookingsController < ApplicationController
  before_action :authenticate_user
  def index
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    user = ApplicationController.retrieve_user_from_token(token)
    if user
    bookings = Booking.where(user_id: user.id)
    render json: bookings.to_json(except: [:created_at, :updated_at])
  end
  end

  def show
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    user = ApplicationController.retrieve_user_from_token(token)

    if user
    booking = Booking.find_by(id: params[:id], user_id: user.id)
    if booking
      render json: booking.to_json(except: [:created_at, :updated_at])
    else
      render json: { error: "Booking not found" }, status: :not_found
    end
    end
  end

  def create
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    user = ApplicationController.retrieve_user_from_token(token)

    if user
    booking = Space.bookings.new(booking_params)
    booking.user_id = user.id
    if booking.save
      render json: booking, status: :created
    else
      render json: { errors: booking.errors.full_messages }, status: :unprocessable_entity
    end
  end
  end
  def update
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    user = ApplicationController.retrieve_user_from_token(token)

    if user
    booking = Booking.find_by(id: params[:id], space_id: Space.id, user_id: user.id)
    if booking
      if booking.update(booking_params)
        render json: booking
      else
        render json: { errors: booking.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Booking not found" }, status: :not_found
    end
  end
  end
  def destroy
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    user = ApplicationController.retrieve_user_from_token(token)

    if user
    booking = Booking.find_by(id: params[:id], space_id: Space.id, user_id: user.id)
    if booking
      booking.destroy
      head :no_content
    else
      render json: { error: "Booking not found" }, status: :not_found
    end
    end
  end

    private

  def authenticate_user
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    user = ApplicationController.retrieve_user_from_token(token)

    unless user
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
  
    def booking_params
      params.permit(:title, :body, :user_id, :space_id, :status)
    end
  end
  