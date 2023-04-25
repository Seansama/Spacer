class AddAndRemoveFromBooking < ActiveRecord::Migration[7.0]
  def change
    remove_column :bookings, :body
    add_column :bookings, :arrival, :datetime
    add_column :bookings, :departure, :datetime
  end
end
