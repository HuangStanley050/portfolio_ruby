# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'portfolios#index', as: 'root'
  get '/about', to: 'portfolios#about', as: 'about'
  get '/portfolio', to: 'portfolios#portfolio', as: 'portfolio'
  get '/resume', to: 'portfolios#resume', as: 'resume'
  get '/contact', to: 'portfolios#contact', as: 'contact'
  get '/blogs', to: 'portfolios#blogs', as: 'blogs'
end
