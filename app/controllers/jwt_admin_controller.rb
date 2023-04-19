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

  def authorized_user
    decoded_token = decode_token
    if decoded_token
      user_id = decoded_token[0]['id']
      user = User.find_by(id: user_id)
    else
      render json: { error: 'Unauthorized access.' }, status: :unauthorized
    end
  end

  def authorize
    unless authorized_user
      render json: { error: 'Unauthorized access.' }, status: :unauthorized
    end
  end
end
