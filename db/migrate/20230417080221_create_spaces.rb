class CreateSpaces < ActiveRecord::Migration[7.0]
  def change
    create_table :spaces do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :location, null: false
      t.string :image_url
      t.decimal :hourly_rate, precision: 10, scale: 2, null: false
      t.decimal :daily_rate, precision: 10, scale: 2, null: false
      t.datetime :available_dates

      t.timestamps
    end
  end
end
