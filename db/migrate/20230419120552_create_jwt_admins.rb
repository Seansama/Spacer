class CreateJwtAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :jwt_admins do |t|

      t.timestamps
    end
  end
end
