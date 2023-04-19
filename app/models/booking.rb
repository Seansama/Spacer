class Booking < ApplicationRecord
   belongs_to :user
   belongs_to :space
   
  validates :title, presence: true, length: { in: 2..50 }
  validates :body, presence: true, length: { minimum: 10 }
  validates :user_id, presence: true
  validates :user, presence: true
  validates :space_id, presence: true
  validates :space, presence: true
  validates :status, inclusion: { in: ["pending", "approved", "rejected"] }
end

