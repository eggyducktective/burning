class FlightsController < ApplicationController
  def new
    @flight = Flight.new
  end

  def create
    flight = Flight.new flight_params
    flight.save
    redirect_to flight_path
  end

  def show
  @flight = Flight.find params[:id]
  end

  def index
    @flights = Flight.all
  end

  def edit
    @flight = Flight.find(params[:id])
  end

  def update
    flight = Flight.find(params[:id])
    flight.update_attributes(flight_params)
    flight.save
    redirect_to(flight_path(flight))
  end

  def destroy
    @flight = Flight.find(params[:id])
    @flight.destroy
    redirect_to flights_path
  end

  private

  def flight_params
    params.require(:flight).permit(:flight_date, :origin , :destination)
  end


end