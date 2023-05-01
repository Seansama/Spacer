class Space < ApplicationRecord
  belongs_to :admin
  has_many :bookings
  has_many :bookings, dependent: :destroy
  validates :name, presence: true
  validates :description, presence: true
  validates :location, presence: true
  validates :daily_rate, presence: true, numericality: { greater_than: 0 }
  validates :image_url, presence: true
  validates :admin_id, presence: true

  # This adds a "status" enum attribute to the Space model
  enum status: { available: 0, booked: 1 }
end

