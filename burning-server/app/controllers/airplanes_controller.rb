class AirplanesController < ApplicationController
  def new
    #
  end

  def create
    # create
  
  end

  def show
    # show current plane


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

  private: plane[:params]
end
