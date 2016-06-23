class JobsController < ApplicationController

  def index
    @jobs = Job.all
    respond_to do |f|
      f.html { render :index }
      f.json { render json: @jobs }
    end
  end

  def show
    @job = Job.find(params[:id])
    respond_to do |f|
      f.html { render :show }
      f.json { render json: @job }
    end
  end

end