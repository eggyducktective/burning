class SessionController < ApplicationController
  def new

  end

  def create
    user = User.find_by name: params[:name]

    if user.present? && user.authenticate( params[:password] )
      session[:user_id] = user.id
      redirect_to pages_path
    else
      flash[:error] = "Invalid emial address or password"
      redirect_to login_path
    end
  end

  def destroy
  end
end
