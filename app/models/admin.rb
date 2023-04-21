class Admin < ApplicationRecord
  has_secure_password
  has_many :spaces
  

  validates :name, :email, presence: true
  validates :email, uniqueness: true
end

