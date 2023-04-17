class CreateAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :admins do |t|
      t.string :name, null: false
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false

      t.timestamps
    end
  end
end
