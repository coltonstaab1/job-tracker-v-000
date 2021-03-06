Rails.application.routes.draw do
  root 'static#home'
  resources :jobs, only: [:index, :show, :create, :update]
  resources :companies, only: [:index, :show] do
    resources :jobs, only: [:index, :show, :create, :update]
  end
end
