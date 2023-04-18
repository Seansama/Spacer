class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.string :title
      t.text :body
      t.integer :user_id
      t.integer :space_id
      t.string :status

      t.timestamps
    end
  end
end
