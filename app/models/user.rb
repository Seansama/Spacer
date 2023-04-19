class User < ApplicationRecord
    has_secure_password
    has_many :bookings 
    
      # Ensure required fields are present
  validates :username, :email, :password_digest, presence: true

  # Ensure uniqueness of email and username
  validates :username, :email, uniqueness: true

  # Ensure email is a valid format
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  # Ensure password meets minimum complexity requirements
  validates :password, length: { minimum: 8 }, format: { with: /\A(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[[:^alnum:]])/x, message: "must include at least one lowercase letter, one uppercase letter, one digit, and one special character" }

  # Ensure role is one of the allowed values
  ROLES = ["admin", "regular"]
  validates :role, inclusion: { in: ROLES }
end

