class UsersController < ApplicationController
  def new
  end

  def create
  end

  def index
    @users = User.all
    format.json do
      render :json => @flight.as_json(include: :airplane)
    end
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
