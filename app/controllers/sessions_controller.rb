class SessionsController < ActionController::API
  def self.encode_token(payload)
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  # Decode a JWT token and return the payload
  def self.decode_token(token)
    JWT.decode(token, Rails.application.secrets.secret_key_base).first
  rescue JWT::DecodeError
    nil
  end

  # Authenticate an admin by email and password
  def self.authenticate(email, password)
    admin = Admin.find_by(email: email)
    if admin&.authenticate(password)
      { admin: admin, token: encode_token({ id: admin.id }) }
    else
      nil
    end
  end

  def self.retrieve_admin_from_token(token)
    payload = decode_token(token)
    if payload && payload['id']
      Admin.find_by(id: payload['id'])
    else
      nil
    end
  end
end
