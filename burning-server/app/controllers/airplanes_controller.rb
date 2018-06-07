class AirplanesController < ApplicationController
  def new
    @airplane = Airplane.new
  end

  def create
    airplane = Airplane.new airplane_params
    airplane.save
    redirect_to airplane_path(airplane)
  end

  def show
    @airplane = Airplane.find params[:id]
    respond_to do |format|
      format.html
      format.json do
        render json: @airplane
      end
    end
  end

  def index
    @airplanes = Airplane.all
  end

  def edit
    @airplane = Airplane.find(params[:id])
  end

  def update
    airplane = Airplane.find(params[:id])
    airplane.update_attributes(airplane_params)
    airplane.save
    redirect_to(airplane_path(airplane))
  end

  def destroy
    @airplane = Airplane.find(params[:id])
    @airplane.destroy
    redirect_to airplanes_path
  end

  private

  def airplane_params
    params.require(:airplane).permit(:name, :rows, :cols)
  end



end
