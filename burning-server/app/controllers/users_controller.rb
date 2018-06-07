class UsersController < ApplicationController
  ActiveRecord::Base.include_root_in_json = false
  def new
  end

  def create
  end

  def index
    @users = User.all
<<<<<<< HEAD
    respond_to do |format|
      format.html
      format.json do
        render json: @users
      end
    end

=======
    format.json do
      render :json => @flight.as_json(include: :airplane)
    end
>>>>>>> 2d63e20e22939c40156f9e5cbf2721d36c2eb254
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
