class Admin < ApplicationRecord
  has_secure_password
  has_many :spaces
  validates :name, :email, :password, presence: true
  validates :email, :password, uniqueness: true
end

