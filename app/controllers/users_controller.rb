class UsersController < ApplicationController

  def create
    new_user = User.create(
      {
        email: params["email"],
        username: params["username"],
        password: params["password"]
      }
    )
    redirect_to "/"
  end

  def index
    users = User.all
    
    respond_to do |format|
      format.json { render :json => users}
    end
  end

  def show
    user = User.find_by( params[:id] )

    respond_to do |format|
      format.json { render :json => user}
    end
  end

  def new
    render :signup
  end

end