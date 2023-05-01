class Booking < ApplicationRecord
  belongs_to :user
  validates :title, presence: true, length: { in: 2..50 }
  validates :user_id, presence: true
  validates :status, inclusion: { in: ["Check in", "Check out"] }
  validates :arrival, presence: true, uniqueness: true
  validates :departure, presence: true, uniqueness: true
end

  
