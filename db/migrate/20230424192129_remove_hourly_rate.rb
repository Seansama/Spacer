class RemoveHourlyRate < ActiveRecord::Migration[7.0]
  def change
    remove_column :spaces, :hourly_rate
  end
end
