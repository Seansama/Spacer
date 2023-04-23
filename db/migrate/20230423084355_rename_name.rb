class RenameName < ActiveRecord::Migration[7.0]
  def change
    rename_column :admins, :name, :username
  end
end
