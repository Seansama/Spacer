class ApplicationController < ActionController::API
  include ActionController::Cookies
    rescue_from StandardError, with: :standard_error
    def app_response(message: 'success', status: 200, data: nil)
        render json: {
            message: message,
            data: data
        }, status: status
    end
    def encode(uid, email)
        payload = {
            data: {
                uid: uid,
                email: email,
                role: 'admin'
            },
            exp: Time.now.to_i + (6 * 3600)
        }
        JWT.encode(payload, ENV['task_train_key'], 'HS256')
    end
    def decode(token)
        JWT.decode(token, ENV['task_train_key'], true, { algorithm: 'HS256' })
    end
    def verify_auth
        auth_headers = request.headers['Authorization']
        if !auth_headers
            app_response(message: 'failed', status: 401, data: { info: 'Your request is not authorized.' })
        else
            token = auth_headers.split(' ')[1]
            save_user_id(token)
        end
    end
    def save_user(id)
        session[:uid] = id
        session[:expiry] = 6.hours.from_now
    end
    def remove_user
        session.delete(:uid)
        session[:expiry] = Time.now
    end
    def session_expired?
        session[:expiry] ||= Time.now
        time_diff = (Time.parse(session[:expiry]) - Time.now).to_i
        unless time_diff > 0
            app_response(message: 'failed', status: 401, data: { info: 'Your session has expired. Please login again to continue' })
        end
      end
end