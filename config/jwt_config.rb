# config/jwt_config.rb
require 'jwt'
Rails.application.config.jwt = ActiveSupport::OrderedOptions.new
Rails.application.config.jwt.secret_key=  ENV['JWT_SECRET_KEY'] || SecureRandom.hex(32)
