class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.references :user, null: false, foreign_key: true
      t.references :space, null: false, foreign_key: true
      t.references :booking, null: false, foreign_key: true
      t.decimal :amount, null: false
      t.string :status, null: false

      t.timestamps
    end
  end
end
