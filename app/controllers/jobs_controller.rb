class JobsController < ApplicationController

  def index
  end

  def show
    @job = Job.find(params[:id])
    respond_to do |f|
      f.html { render :show }
      f.json { render json: @job }
    end
  end

end