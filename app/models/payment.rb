class Payment < ApplicationRecord
  # belongs_to :user
  # belongs_to :space
  # belongs_to :booking

  # validates :user_id, :space_id, :booking_id, :amount, :status, presence: true
  validates :amount, numericality: { greater_than: 0 }
  validates :status, inclusion: { in: %w(pending paid) }
end
