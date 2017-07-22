Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'session' => 'session#create'
  post 'users' => 'users#create'
  resources :expenses, only: [:index, :create, :update, :destroy]
end
