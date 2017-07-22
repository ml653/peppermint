Rails.application.routes.draw do

  root 'static#index'
  post 'session' => 'session#create'
  post 'users' => 'users#create'
  resources :expenses, only: [:index, :create, :update, :destroy]
  get 'reports/generate' => 'reports#generate'
end
