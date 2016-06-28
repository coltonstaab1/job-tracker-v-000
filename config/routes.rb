Rails.application.routes.draw do

  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  root 'static#home'
  resources :jobs, only: [:index, :show, :create, :update]
  resources :companies, only: [:index, :show]
end
