class HomeController < ApplicationController
  def index
    sleepisodes = Sleepisode.all

    render(:index, {locals: {sleepisodes: sleepisodes} } )
  end
end