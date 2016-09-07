class Api::UsersController < ApplicationController

	def index
		@users = User.all

		render :index
	end

	def show
    @user = User.find(params[:id])
    # does this need a path like below
  end

	def create
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	def update
		@user = User.find(params[:id])
		if @user.update(user_params)
			render "api/posts/update", status: 200
		else
			render "api/shared/error", status: 422
		end
	end

	private

	def user_params
		params.require(:user).permit(:username, :password, :fullname, :prof_image_url, :profile_text)
	end

end
