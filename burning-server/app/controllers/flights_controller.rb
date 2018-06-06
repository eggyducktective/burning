class FlightsController < ApplicationController
  def new
    @flight = Flight.new
  end

  def create
    flight = Flight.new flight_params
    flight.save
    redirect_to flight_path(flight)
  end

  def show
    @flight = Flight.find params[:id]
    respond_to do |format|
      format.html
      format.json do
        render json: @flight
      end
    end
  end

  def index
    @flights = Flight.all
    respond_to do |format|
      format.html
      format.json do
        render json: @flights
      end
  end

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
    params.require(:flight).permit(:flight_number, :flight_date, :origin , :destination, :airplane_id)
  end


end
