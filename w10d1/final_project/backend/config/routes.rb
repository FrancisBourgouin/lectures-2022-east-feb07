Rails.application.routes.draw do
  scope :api do
    resources :urls

    namespace :v1 do 
      resources :urls
    end

    namespace :v2 do 
      resources :urls
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
