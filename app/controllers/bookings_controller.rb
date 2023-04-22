class BookingsController < ApplicationController
    def index
      bookings = Booking.all
      render json: bookings.to_json(except: [:created_at, :updated_at])
    end
  
    def show
      booking = Booking.find(params[:id])
      render json: booking.to_json(except: [:created_at, :updated_at])
    end
  
    def create
      booking = Booking.new(booking_params)
      if booking.save
        render json: booking, status: :created
      else
        render json: { errors: booking.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def update
      booking = Booking.find(params[:id])
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
  
    def destroy
      booking = Booking.find_by(id: params[:id])
      if booking
        booking.destroy
        head :no_content
      else
        render json: { error: "Booking not found" }, status: :not_found
      end
    end
    
  
    private
  
    def booking_params
      params.permit(:title, :body, :user_id, :space_id, :status)
    end
  end
  