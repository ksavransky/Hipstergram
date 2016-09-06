class Api::FollowsController < ApplicationController
  before_action :require_logged_in

  def create
    @follow = Follow.create!({follower_id: current_user.id, followee_id: params[:id]})
    @user = User.find(params[:id])
    render '/api/users/show'
  end

  def destroy
    @follow = Follow.find_by({follower_id: current_user.id, followee_id: params[:id]})
    @follow.destroy!
    @user = User.find(params[:id])
    render 'api/users/show'
  end
end



class Api::PhotosController < ApplicationController

  def index
    @photos = current_user.flatten_photos
    render :index
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
    else
      @errors = @design.errors.full_messages
      render :show, status: 401
    end
  end

  def update
    @photo = Photo.find(params[:id])
    if @photo.update(photo_params)
      render :show
    else
      @errors = @design.errors.full_messages
      render :show, status: 401
    end
  end

  def show
    @photo = Photo.includes(comments: :user).find(params[:id])
    render :show
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render :show
  end
  private

  def photo_params
    params.require(:photo).permit(:title, :user_id, :url)
  end
end
