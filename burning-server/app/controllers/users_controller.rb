class UsersController < ApplicationController
  ActiveRecord::Base.include_root_in_json = false
  def new
  end

  def create
  end

  def index
    @users = User.all
    respond_to do |format|
      format.html
      format.json do
        render json: @users
      end
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
