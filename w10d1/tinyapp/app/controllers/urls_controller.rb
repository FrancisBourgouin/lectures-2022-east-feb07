class UrlsController < ApplicationController
  before_action :set_url, only: %i[ show edit update destroy ]

  # GET /urls or /urls.json
  def index
    @urls = Url.all
    user_id = params[:user_id]
    @urls = User.find(user_id).urls.all unless !user_id
  end

  # GET /urls/1 or /urls/1.json
  def show
  end

  # GET /urls/new
  def new
    @users = []
    User.all.each do |user|
      @users.push(user.username)
    end
    @url = Url.new
  end

  # GET /urls/1/edit
  def edit
  end

  # POST /urls or /urls.json
  def create
    @user = User.where(username: url_params[:user]).first
    filtered_url_params = url_params.reject{|param| param == "user"}
    @url = @user.urls.new(filtered_url_params)

    respond_to do |format|
      if @url.save
        format.html { redirect_to url_url(@url), notice: "Url was successfully created." }
        format.json { render :show, status: :created, location: @url }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @url.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /urls/1 or /urls/1.json
  def update
    respond_to do |format|
      if @url.update(url_params)
        format.html { redirect_to url_url(@url), notice: "Url was successfully updated." }
        format.json { render :show, status: :ok, location: @url }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @url.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /urls/1 or /urls/1.json
  def destroy
    @url.destroy

    respond_to do |format|
      format.html { redirect_to urls_url, notice: "Url was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_url
      @url = Url.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def url_params
      params.require(:url).permit(:long_url, :short_url, :description, :user)
    end
end
