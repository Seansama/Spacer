class RemoveNull < ActiveRecord::Migration[7.0]
  def change
    change_column_null :admins, :username, true
    change_column_null :admins, :email, true
    change_column_null :admins, :password_digest, true
  end
end
