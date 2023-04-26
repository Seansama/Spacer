class BookingsController < ApplicationController
  before_action :authenticate_user
  def index
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    user = ApplicationController.retrieve_user_from_token(token)
    if user
    bookings = Booking.where(user_id: user.id)
    render json: bookings.to_json(except: [:updated_at])
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
        booking = Booking.create(booking_params) # Updated to use space.bookings.build
        booking.user_id = user.id
        if booking.save
          render json: booking, status: :created
        else
          render json: { errors: booking.errors.full_messages }, status: :unprocessable_entity
        end
    else
      render json: { errors: 'Unauthorized' }, status: :unauthorized # Added error handling for unauthorized user
    end
  end

  def update
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    user = ApplicationController.retrieve_user_from_token(token)

    booking = Booking.find_by(user_id: user.id)
    if booking
      if booking.update(
        status: params[:status]
      )
        render json: booking
      else
        render json: { errors: booking.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Booking not found" }, status: :not_found
    end
  end
  def destroy
    token = request.headers['Authorization'].to_s.gsub('Bearer ', '')
    user = ApplicationController.retrieve_user_from_token(token)
    if (booking = Booking.find_by(user_id: user.id))
      booking.destroy
      head :no_content
    else
      render json: { error: "Booking not found" }, status: :not_found
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
      params.permit(:arrival, :departure, :status, :title)
    end
  end
  