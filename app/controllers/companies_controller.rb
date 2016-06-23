class CompaniesController < ApplicationController

  def index
  end

  def show
    @company = Company.find(params[:id])
    respond_to do |f|
      f.html { render :show }
      f.json { render json: @company }
    end
  end

end