class JobsController < ApplicationController

  def index
    @job = Job.new
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

  def create
    @job = Job.create(job_params)
    render json: @job, status: 201
  end

  def update
    @job = Job.find(params[:id])
    @job.update(job_params)
    render json: @job, status: 201
  end

  private
    def job_params
      params.require(:job).permit(:title, :city, :state, :description, :salary)
    end

end