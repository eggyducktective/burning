class ReservationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @reservations = Reservation.all
      render :json => @reservations.as_json(include: :user)
  end

  def single_flight_reservation
    @single_flight_reservation = Reservation.where('flight_id' => params[:id])
    render :json => @single_flight_reservation.as_json(include: :user)
  end

  def create
    reservation = Reservation.create reservation_params
    render :json => { created: true }, status: :ok
  end

  private
  def reservation_params
    params.require(:reservation).permit(:user_id, :flight_id, :row, :col )
  end
end
