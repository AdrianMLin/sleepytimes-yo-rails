class SleepisodesController < ApplicationController
  before_action :set_sleepisode, only: [:show, :edit, :update, :destroy]

  # GET /sleepisodes
  # GET /sleepisodes.json
  def index
    @sleepisodes = Sleepisode.all
  end

  # GET /sleepisodes/1
  # GET /sleepisodes/1.json
  def show
  end

  # GET /sleepisodes/new
  def new
    @sleepisode = Sleepisode.new
  end

  # GET /sleepisodes/1/edit
  def edit
  end

  # POST /sleepisodes
  # POST /sleepisodes.json
  def create
    binding.pry
    
    new_sleepisode = Sleepisode.create({
      start_sleepiness: params[:start_sleepiness],
      end_sleepiness: params[:end_sleepiness],
      location: params[:location],
      reason_sleepiness: params[:reason_sleepiness],
      reason_waking: params[:reason_waking],
      hours_slept_last_night: params[:hours_slept_last_night]
    })

    respond_to do |format|
      if @sleepisode.save
        format.html { redirect_to @sleepisode, notice: 'Sleepisode was successfully created.' }
        format.json { render :show, status: :created, location: @sleepisode }
      else
        format.html { render :new }
        format.json { render json: @sleepisode.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sleepisodes/1
  # PATCH/PUT /sleepisodes/1.json
  def update
    respond_to do |format|
      if @sleepisode.update(sleepisode_params)
        format.html { redirect_to @sleepisode, notice: 'Sleepisode was successfully updated.' }
        format.json { render :show, status: :ok, location: @sleepisode }
      else
        format.html { render :edit }
        format.json { render json: @sleepisode.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sleepisodes/1
  # DELETE /sleepisodes/1.json
  def destroy
    @sleepisode.destroy
    respond_to do |format|
      format.html { redirect_to sleepisodes_url, notice: 'Sleepisode was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sleepisode
      @sleepisode = Sleepisode.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sleepisode_params
      params[:sleepisode]
    end
end
