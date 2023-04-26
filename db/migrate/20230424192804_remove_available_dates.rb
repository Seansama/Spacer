class RemoveAvailableDates < ActiveRecord::Migration[7.0]
  def change
    remove_column :spaces, :available_dates
  end
end
