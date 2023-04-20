Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # resources :bookings, only: [:index, :show, :destroy, :edit, :update, :create, :new ] 
  get '/bookings', to: 'bookings#index'
  get '/bookings/:id', to: 'bookings#show'
  post '/bookings', to: 'bookings#create'
  patch '/powers/:id', to: 'bookings#update'
  delete '/bookings/:id', to: 'bookings#destroy'

  #  resources :users

    # post "/signup", to: 'users#create'
    # post '/login', to: 'sessions#create'
    # delete '/logout', to: 'sessions#destroy'
    # post '/auth/login', to: 'authentication#login'
    post '/users', to: 'users#register'
  post '/login', to: 'users#login'
  delete '/logout', to: 'users#logout'
end