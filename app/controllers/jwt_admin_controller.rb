class JwtAdminController < ApplicationController
  SECRET_KEY = ENV['JWT_SECRET_KEY'] || 'secret_key_base'

  def encode_token(payload)
    JWT.encode(payload, SECRET_KEY)
  end

  def decode_token
    auth_header = request.headers['Authorization']
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, SECRET_KEY, true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def authorized_admin
    decoded_token = decode_token
    if decoded_token
      admin_id = decoded_token[0]['id']
      admin = Admin.find_by(id: admin_id)
    else
      render json: { error: 'Unauthorized access.' }, status: :unauthorized
    end
  end

  def authorize
    unless authorized_admin
      render json: { error: 'Unauthorized access.' }, status: :unauthorized
    end
  end
end
