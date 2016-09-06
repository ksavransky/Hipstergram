Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :posts
    resources :comments, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :relationships, only: [:create, :destroy]
  end

  root "static_pages#root"
end
