class BookingsController < ApplicationController

    def index
        bookings = Booking.all
        render json: bookings.to_json(except: [:created_at, :updated_at])
    end

    def show
        booking = Booking.find(params[:id])
        render json: booking.to_json(except: [:created_at, :updated_at])
    end

    def edit
        booking = Booking.find(params[:id])
        render json: booking
      end

    def update
        booking = Booking.find(params[:id])
        if booking
            booking.update(booking_params)
            render json: booking, status: :accepted
        else 
            render json:{ error: "booking not found"}, status: :not_found
        end
    end

    def new
        booking = Booking.new
        render json: booking
    end

    
    def create
        booking = Booking.new(booking_params)
      
        if booking.save
          render json: booking
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
               
    

    def destroy
        booking = find_booking
        booking.destroy
        head :no_content
    end
  

    private
    def booking_params
        params.permit(:title, :body, :user_id, :space_id, :status)
    end
end



