class HomeController < ApplicationController
  def index
    sleepisodes = Sleepisode.all
    users = User.all

    render(:index, {locals: {sleepisodes: sleepisodes, users: users} } )
  end
end