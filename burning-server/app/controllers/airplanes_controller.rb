class AirplanesController < ApplicationController
  def new
    #
  end

  def create
    # create

  end

  def show
  @airplane = Airplane.find params[:id]


  end

  def index
    @airplanes = Airplane.all
  end

  def edit

  end

  def update
    # airplanes.

  end

  def destroy
    #
  end


end
