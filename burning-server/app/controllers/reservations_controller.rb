class ReservationsController < ApplicationController
  ActiveRecord::Base.include_root_in_json = false
  def new
  end

  def create
  end

  def index
    @reservations = Reservation.all
    respond_to do |format|
      format.html
      format.json do
        render :json => @reservations.as_json(include: :user)
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
