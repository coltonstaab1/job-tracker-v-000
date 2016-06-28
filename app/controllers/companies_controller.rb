class CompaniesController < ApplicationController

  def index
    @companies = Company.all
    respond_to do |f|
      f.html { render :index}
      f.json { render json: @companies }
    end
  end

  def show
    @company = Company.find(params[:id])
    respond_to do |f|
      f.html { render :show }
      f.json { render json: @company }
    end
  end

end