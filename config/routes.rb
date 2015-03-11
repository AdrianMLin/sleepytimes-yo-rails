Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  resources :sleepisodes

  resources :users do
    resources :sleepisodes, shallow: true
  end


  root 'home#index'

  post '/login' => 'session#create'
  delete '/session' => 'session#destroy'

#                Prefix Verb   URI Pattern                               Controller#Action
#         sleepisodes GET    /sleepisodes(.:format)                    sleepisodes#index
#                     POST   /sleepisodes(.:format)                    sleepisodes#create
#      new_sleepisode GET    /sleepisodes/new(.:format)                sleepisodes#new
#     edit_sleepisode GET    /sleepisodes/:id/edit(.:format)           sleepisodes#edit
#          sleepisode GET    /sleepisodes/:id(.:format)                sleepisodes#show
#                     PATCH  /sleepisodes/:id(.:format)                sleepisodes#update
#                     PUT    /sleepisodes/:id(.:format)                sleepisodes#update
#                     DELETE /sleepisodes/:id(.:format)                sleepisodes#destroy
#    user_sleepisodes GET    /users/:user_id/sleepisodes(.:format)     sleepisodes#index
#                     POST   /users/:user_id/sleepisodes(.:format)     sleepisodes#create
# new_user_sleepisode GET    /users/:user_id/sleepisodes/new(.:format) sleepisodes#new
#                     GET    /sleepisodes/:id/edit(.:format)           sleepisodes#edit
#                     GET    /sleepisodes/:id(.:format)                sleepisodes#show
#                     PATCH  /sleepisodes/:id(.:format)                sleepisodes#update
#                     PUT    /sleepisodes/:id(.:format)                sleepisodes#update
#                     DELETE /sleepisodes/:id(.:format)                sleepisodes#destroy
#               users GET    /users(.:format)                          users#index
#                     POST   /users(.:format)                          users#create
#            new_user GET    /users/new(.:format)                      users#new
#           edit_user GET    /users/:id/edit(.:format)                 users#edit
#                user GET    /users/:id(.:format)                      users#show
#                     PATCH  /users/:id(.:format)                      users#update
#                     PUT    /users/:id(.:format)                      users#update
#                     DELETE /users/:id(.:format)                      users#destroy
#                root GET    /                                         home#index
#               login POST   /login(.:format)                          session#create
#             session DELETE /session(.:format)                        session#destroy

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
