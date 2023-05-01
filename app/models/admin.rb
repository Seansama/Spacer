class Admin < ApplicationRecord
  has_secure_password

  has_many :spaces
  validates :username, :email, :password, presence: true
  validates :email, :username, uniqueness: true
end

