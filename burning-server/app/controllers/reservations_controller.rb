class ReservationsController < ApplicationController
  def index
    @reservations = Reservation.all
      render :json => @reservations.as_json(include: :user)
  end
end
