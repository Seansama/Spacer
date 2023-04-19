Rails.application.routes.draw do
  resources :payments
  resources :spaces
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :users
  resources :bookings, only: [:index, :show, :destroy, :edit, :update, :create, :new ]
  resources :admin, only: [:show, :create, :update, :destroy]
end
