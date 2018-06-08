Rails.application.routes.draw do
  root to: "pages#home"
  get "/login" => "session#new"
  post "/login" => "session#create"
  delete "/login" => "session#destroy"

  get "/pages" => "pages#home"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/search" => 'flights#index'
  get "/users" => 'users#index'
  get "/reservations" => 'reservations#index'
  post "/reservation" => "reservations#create"
  resources :airplanes, :flights
end
