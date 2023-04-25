Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"


  resources :payments
  #admin custom controllers
  post '/admin_login' => 'admin#admin_login'
  post '/admin' => 'admin#create'

  #Spaces controllers
  get '/spaces' => 'spaces#index'
  post '/spaces' => 'spaces#create'
  get '/show_spaces' => 'spaces#show_spaces'
  get '/space/:id' => 'spaces#show'
  patch '/update_space' => 'spaces#update_space'
  delete '/delete_space' => 'spaces#delete_space'

  #bookings
  get '/bookings' => "bookings#index"
  get 'spaces/:id/booking/:id', to: 'bookings#show'
  post '/spaces/:id/bookings', to: 'bookings#create'
  patch '/update_booking', to: 'bookings#update'
  delete '/delete_booking', to: 'bookings#destroy'


  #users
    post '/users', to: 'users#register'
    post '/login', to: 'users#login'
    delete '/logout', to: 'users#logout'
end

