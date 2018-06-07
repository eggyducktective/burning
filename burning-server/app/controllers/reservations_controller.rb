class ReservationsController < ApplicationController
  def index
    @reservations = Reservation.all
      render :json => @reservations.as_json(include: :user)
  end
  def single_flight_reservation
    @single_flight_reservation = Reservation.where('flight_id' => params[:id])
    render :json => @single_flight_reservation.as_json(include: :user)
  end
end
