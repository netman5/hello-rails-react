Rails.application.routes.draw do
  namespace :v1, defaults: {format: 'json'} do
    get 'messages', to: 'messages#index'
  end
  get '*page', to: 'static#index', constaints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root "static#index"
end
