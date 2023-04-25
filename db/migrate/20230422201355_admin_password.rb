class AdminPassword < ActiveRecord::Migration[7.0]
  def change
    remove_column :admins, :password_digest
  end
end
