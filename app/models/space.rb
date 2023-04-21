class Space < ApplicationRecord
  belongs_to :admin
  belongs_to :user, through
  validates :name, presence: true
  validates :description, presence: true
  validates :location, presence: true
  validates :hourly_rate, presence: true, numericality: { greater_than: 0 }
  validates :daily_rate, presence: true, numericality: { greater_than: 0 }
  validates :available_dates, presence: true

  # This adds a "status" enum attribute to the Space model
  enum status: { available: 0, booked: 1 }
end

