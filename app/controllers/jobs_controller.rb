class JobsController < ApplicationController

  def index

    @job = Job.new

    if params[:company_id].nil?
      @jobs = Job.all
    else
      @jobs = Job.find_by(company_id: params[:company_id])
    end

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
    binding.pry
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
      params.require(:job).permit(
        :title, 
        :city, 
        :state, 
        :description, 
        :salary,
        :company_id)
    end

end